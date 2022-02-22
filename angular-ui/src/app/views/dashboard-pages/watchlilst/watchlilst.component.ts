import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { GlobalService } from "../../../shared-ui/services/global.service";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { JwtService, UsersService } from "../../../shared-ui/services";
import { currentUser } from "../../../layouts/home-layout/user.model";
import { StocksService } from "../../../shared-ui/services/stocks.service";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
// import * as $ from "jquery";
import { ModalDirective } from "ngx-bootstrap/modal";
import { CryptoService } from "../../../shared-ui/services/crypto.service";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label, Color } from "ng2-charts";
import * as moment from "moment-timezone";
declare var $: any;

@Component({
  selector: "app-watchlilst",
  templateUrl: "./watchlilst.component.html",
  styleUrls: ["./watchlilst.component.scss"],
})
export class WatchlilstComponent implements OnInit {
  currentUser: currentUser = new currentUser();
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  stockList: any = [];
  coinLivechangeList: any = [];
  @ViewChild("showChartModal", { static: false })
  public showChartModal: ModalDirective;

  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  lineChartLabels: Label[] = [];
  lineChartType: ChartType = "line";
  lineChartLegend = true;
  lineChartPlugins = [];
  historyDataTable = null;

  public lineChartData: ChartDataSets[] = [
    {
      data: [],
      label: "VOLUME VS 20 DAY OF VOLUME AVG HISTORY",
      backgroundColor: [
        "rgba(255,255,0, 0.2)",
        "rgba(255,255,0, 0.2)",
        "rgba(255,255,0, 0.2)",
        "rgba(255,255,0, 0.2)",
        "rgba(255,255,0, 0.2)",
        "rgba(255,255,0, 0.2)",
      ],
      borderColor: [
        "rgba(255,255,0, 0.2)",
        "rgba(255,255,0, 0.2)",
        "rgba(255,255,0, 0.2)",
        "rgba(255,255,0, 0.2)",
        "rgba(255,255,0, 0.2)",
        "rgba(255,255,0, 0.2)",
      ],
      borderWidth: 1,
    },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" }
  ];

  constructor(
    private globalService: GlobalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private usersService: UsersService,
    private jwtService: JwtService,
    private stocksService: StocksService,
    private cryptoService: CryptoService
  ) {
    this.globalService.topscroll();
  }

  ngOnInit() {
    this.currentUser = this.jwtService.getCurrentUser();
    setTimeout(() => {
      this.watchList();
    }, 1000);
    this.dtOptions = {
      responsive: true,
      columnDefs: [
        {
          targets: 4,
          orderable: false,
        },
      ],
      // pagingType: 'full_numbers'
    };
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  watchList() {
    this.spinner.show();
    this.globalService.setLoadingLabel("Data is fetching... Please Wait.");
    this.cryptoService.watchList().subscribe(
      (data) => {
        if (data.status === 200) {
          this.datatableElement.dtInstance.then(
            (dtInstance: DataTables.Api) => {
              dtInstance.destroy();
              this.coinLivechangeList = data.data;
              this.dtTrigger.next();
              this.spinner.hide();
            }
          );
        } else {
          this.spinner.hide();
        }
      },
      (error) => {
        this.spinner.hide();
      }
    );
  }
  closeModel() {
    this.showChartModal.hide();
  }
  chartDataHistory = [];
  showChartModel(chartDataInfo) {
    this.spinner.show();
    let chartData = JSON.parse(JSON.stringify(chartDataInfo));
    this.lineChartLabels = [];
    this.lineChartData[0].data = [];
    let tempChartHistory = [];
    let tempChartHistoryDate = [];
    chartData.history.map((historyElem) => {
      historyElem.details = JSON.parse(historyElem.details);
      let ShortDateString = moment(historyElem.createdAt).format("DD/MM/YYYY");
      tempChartHistory.push(historyElem.todayVolVsvolAvgof20Days);
      tempChartHistoryDate.push(ShortDateString);
    });
    this.chartDataHistory = chartData.history;

    this.lineChartData[0].data = tempChartHistory;
    this.lineChartLabels = tempChartHistoryDate;
    // console.log(this.lineChartData[0].data, 'this.lineChartData[0].data');
    this.lineChartData[0].data;
    this.showChartModal.show();
    const self = this;
    if (self.historyDataTable) {
      self.historyDataTable.destroy();
    }
    setTimeout(() => {
      self.spinner.hide();
      self.historyDataTable = $("#historyDataTable").DataTable({
        searching: false,
        ordering: true,
        lengthChange: false,
        lengthMenu: [[5]],
      });
    }, 500);
  }
}

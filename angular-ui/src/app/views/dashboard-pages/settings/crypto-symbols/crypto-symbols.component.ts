import { Component, OnInit, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import * as $ from "jquery";
import { ModalDirective } from "ngx-bootstrap/modal";
import { GlobalService, JwtService } from "../../../../shared-ui/services";
import { currentUser } from "../../../../layouts/home-layout/user.model";
import { CryptoService } from "../../../../shared-ui/services/crypto.service";
import { CryptoSymbol } from "../crypto-symbol.modal";

@Component({
  selector: "app-crypto-symbols",
  templateUrl: "./crypto-symbols.component.html",
  styleUrls: ["./crypto-symbols.component.scss"],
})
export class CryptoSymbolsComponent implements OnInit {
  currentUser: currentUser = new currentUser();
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  cryptoList: any = [];
  submitted = false;
  @ViewChild("deleteCryptSymboModal", { static: false })
  public deleteCryptSymboModal: ModalDirective;
  @ViewChild("showAddEditCryptoSymbolModal", { static: false })
  public showAddEditCryptoSymbolModal: ModalDirective;

  requiredValidate: any = {
    name: "",
  };

  newSymbol: CryptoSymbol = new CryptoSymbol();

  constructor(
    private globalService: GlobalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private jwtService: JwtService,
    private cryptoService: CryptoService
  ) {
    this.globalService.topscroll();
    this.getListCrypto();
  }

  ngOnInit() {
    this.currentUser = this.jwtService.getCurrentUser();
    this.dtOptions = {
      responsive: true,
      columnDefs: [
        {
          targets: 0,
          orderable: false,
          searchable: false,
        },
        {
          targets: 1,
          orderable: false,
        },
        {
          targets: 2,
          orderable: false,
        },
        {
          targets: 3,
          orderable: false,
        },
      ],
      // pagingType: 'full_numbers'
    };
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  getListCrypto() {
    this.spinner.show();
    this.cryptoService.list().subscribe(
      (res) => {
        if (res.status === 200) {
          this.datatableElement.dtInstance.then(
            (dtInstance: DataTables.Api) => {
              dtInstance.destroy();
              this.dtTrigger.next();
              this.cryptoList = res.data;
              this.spinner.hide();
            }
          );
        }
      },
      (error) => {
        console.log("status 200 success");
        this.spinner.hide();
      }
    );
  }

  showAddEditModal(cryptoSymbol?: any) {
    this.newSymbol = cryptoSymbol;
    if (cryptoSymbol && cryptoSymbol._id) {
      this.newSymbol = Object.assign({}, cryptoSymbol);
      this.showAddEditCryptoSymbolModal.show();
    } else {
      this.newSymbol = new CryptoSymbol();
      this.showAddEditCryptoSymbolModal.show();
    }
  }

  showshowActionModal(cryptoSymbo: any) {
    this.newSymbol = cryptoSymbo;
    this.deleteCryptSymboModal.show();
  }

  saveCryptoSymbol() {
    const self = this;
    const objecKeys = Object.keys(this.requiredValidate);
    const found = objecKeys.filter(function (obj) {
      return !self.newSymbol[obj];
    });

    if (found.length) {
      this.toastr.error("* Please fill all mandatory fields.", "Error");
      return false;
    }
    this.spinner.show();
    let postData = Object.assign({}, this.newSymbol);
    postData.name = postData.name.toLowerCase();
    this.cryptoService.saveCryptoSymbol(postData).subscribe(
      (data) => {
        this.spinner.hide();
        if (data.status === 200) {
          const submitText = this.newSymbol._id ? "Updated" : "Saved";
          this.toastr.success(
            "Details " + submitText + " Successfully.",
            "Success"
          );
          this.getListCrypto();
          this.closeModel();
        } else if (data.status === 422) {
          this.toastr.warning(
            "This coin name is not valid. Please enter valid coin name.",
            "Validation"
          );
        } else {
          this.closeModel();
        }
      },
      (error) => {
        this.closeModel();
        this.spinner.hide();
        this.toastr.error(
          "There are some server error. Please check connection.",
          "Error"
        );
      }
    );
  }

  closeModel() {
    this.showAddEditCryptoSymbolModal.hide();
    this.deleteCryptSymboModal.hide();
  }

  deletecryptoSymbol() {
    this.spinner.show();
    this.cryptoService.delete(this.newSymbol).subscribe(
      (data) => {
        this.spinner.hide();
        this.closeModel();
        this.getListCrypto();
        this.toastr.success("Crypto Symbol deleted successfully.", "Success");
      },
      (error) => {
        this.spinner.hide();
        this.deleteCryptSymboModal.hide();
        this.toastr.error(
          "There are some server error. Please check connection.",
          "Error"
        );
      }
    );
  }
}

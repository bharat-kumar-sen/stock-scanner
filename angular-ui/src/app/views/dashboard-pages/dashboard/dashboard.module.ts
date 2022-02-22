import { NgModule, APP_INITIALIZER } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedUiModule } from "../../../shared-ui/shared-ui.module";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataTablesModule } from "angular-datatables";
import { ModalModule, BsDropdownModule , BsModalService} from "ngx-bootstrap";
import { ChartsModule, ThemeService } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUiModule,
    DataTablesModule,
    DashboardRoutingModule,
    ModalModule.forRoot(),
    ChartsModule,
  ],
  declarations: [DashboardComponent],
  providers: [ThemeService],
})
export class DashboardModule {}
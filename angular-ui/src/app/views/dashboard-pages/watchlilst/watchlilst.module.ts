import { NgModule, APP_INITIALIZER } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedUiModule } from "../../../shared-ui/shared-ui.module";
import { WatchlilstRoutingModule } from './watchlilst-routing.module';
import { WatchlilstComponent } from './watchlilst.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataTablesModule } from "angular-datatables";
import { ModalModule } from "ngx-bootstrap";
import { ChartsModule, ThemeService } from "ng2-charts";


@NgModule({
  declarations: [WatchlilstComponent],
  providers: [ThemeService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUiModule,
    DataTablesModule,
    WatchlilstRoutingModule,
    ModalModule.forRoot(),
    ChartsModule
  ]
})
export class WatchlilstModule { }
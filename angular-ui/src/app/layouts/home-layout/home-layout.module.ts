import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalModule, BsDropdownModule } from "ngx-bootstrap";
import { SharedUiModule } from "../../shared-ui/shared-ui.module";
import { FormsModule } from "@angular/forms";
import { DashboardLayoutModule } from "../dashboard-layout/dashboard-layout.module";
import { HomeLayoutRoutingModule } from "./home-layout-routing.module";
import { HomeLayoutComponent } from "./home-layout.component";
import { AuthGuard } from "../../shared-ui/guard/auth.guard";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeLayoutRoutingModule,
    SharedUiModule,
    DashboardLayoutModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
  ],
  declarations: [HomeLayoutComponent],
  providers: [AuthGuard],
})
export class HomeLayoutModule {}

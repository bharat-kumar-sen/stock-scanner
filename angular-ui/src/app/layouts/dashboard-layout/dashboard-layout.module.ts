import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { SharedUiModule } from "../../shared-ui/shared-ui.module";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";

// tslint:disable-next-line: no-use-before-declare
const APP_CONTAINERS = [DashboardLayoutComponent];
import {
  AppAsideModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from "@coreui/angular";
import { DashboardLayoutRoutingModule } from "./dashboard-layout-routing.module";
import { DashboardLayoutComponent } from "./dashboard-layout.component";
import { AuthGuard } from "../../shared-ui/guard/auth.guard";

@NgModule({
  imports: [
    CommonModule,
    AppAsideModule,
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    DashboardLayoutRoutingModule,
    BsDropdownModule.forRoot(),
    SharedUiModule,
  ],
  declarations: [DashboardLayoutComponent, ...APP_CONTAINERS],
  providers: [AuthGuard],
})
export class DashboardLayoutModule {}

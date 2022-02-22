import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardLayoutComponent } from "./dashboard-layout.component";
import { AuthGuard } from "../../shared-ui/guard/auth.guard";

/** Here is define all admin pannel page routing*/
const routes: Routes = [
  {
    path: "", component: DashboardLayoutComponent, canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("../../views/dashboard-pages/dashboard/dashboard.module").then(
            (mod) => mod.DashboardModule
          ),
      },
      {
        path: "settings",
        loadChildren: () =>
          import("../../views/dashboard-pages/settings/settings.module").then(
            (mod) => mod.SettingsModule
          ),
      },
      {
        path: "watchlist",
        loadChildren: () =>
          import("../../views/dashboard-pages/watchlilst/watchlilst.module").then(
            (mod) => mod.WatchlilstModule
          ),
      },
      // {
      //   path: "crypto",
      //   loadChildren: () =>
      //     import("../../views/dashboard-pages/crypto/crypto.module").then(
      //       (mod) => mod.CryptoModule
      //     ),
      // },
      // {
      //   path: "stock",
      //   loadChildren: () =>
      //     import("../../views/dashboard-pages/stock/stock.module").then(
      //       (mod) => mod.StockModule
      //     ),
      // }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardLayoutRoutingModule {}

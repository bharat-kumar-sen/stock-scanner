import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardLayoutComponent } from "./layouts/dashboard-layout/dashboard-layout.component";
import { HomeLayoutComponent } from "./layouts/home-layout/home-layout.component";
import { AuthGuard } from "./shared-ui/guard/auth.guard";

/** Here is define two main routing (login/home/admin) after go it we use subRouting*/
const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "home", component: HomeLayoutComponent, pathMatch: "full" },
  {
    path: "admin", component: DashboardLayoutComponent,
    data: { title: "Home" },
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}

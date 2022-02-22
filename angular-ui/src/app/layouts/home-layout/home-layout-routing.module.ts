import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeLayoutComponent } from "./home-layout.component";

/** Here is define all front hand page routing*/
const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "login",
        loadChildren: () =>
          import("../../views/home-pages/login/login.module").then(
            (mod) => mod.LoginModule
          ),
      },
      {
        path: "signup",
        loadChildren: () =>
          import("../../views/home-pages/signup/signup.module").then(
            (mod) => mod.SignupModule
          ),
      },
      {
        path: "login/:id",
        loadChildren: () =>
          import("../../views/home-pages/login/login.module").then(
            (mod) => mod.LoginModule
          ),
      },
      {
        path: "forgot-password",
        loadChildren: () =>
          import(
            "../../views/home-pages/forgot-password/forgot-password.module"
          ).then((mod) => mod.ForgotPasswordModule),
      },
      {
        path: "recover-password/:userId/:token",
        loadChildren: () =>
          import(
            "../../views/home-pages/recover-password/recover-password.module"
          ).then((mod) => mod.RecoverPasswordModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeLayoutRoutingModule {}

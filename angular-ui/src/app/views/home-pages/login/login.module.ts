import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "./login-routing.module";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AuthService,
} from "angular-6-social-login";
import { SocialLoginModule, AuthServiceConfig } from "angular-6-social-login";
import { SharedUiModule } from "../../../shared-ui/shared-ui.module";

export function socialConfigs() {
  const config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
        "728647792310-892egqr8oohsvr8k2ie5ce5n6am5vfe3.apps.googleusercontent.com"
      ),
    },
  ]);
  return config;
}

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    SharedUiModule,
    SocialLoginModule,
  ],
  declarations: [LoginComponent],
  providers: [
    AuthService,
    {
      provide: AuthServiceConfig,
      useFactory: socialConfigs,
    },
  ],
})
export class LoginModule {}

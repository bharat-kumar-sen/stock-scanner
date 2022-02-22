import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AuthService,
} from "angular-6-social-login";
import { environment } from "../../../../../environments/environment";
import { AlertService } from "../../../../shared-ui/alert/alert.service";
import { currentUser } from "../../../../layouts/home-layout/user.model";
import { JwtService } from "../../../../shared-ui/services/jwt.service";
import { GlobalService } from "../../../../shared-ui/services/global.service";
import { NgxSpinnerService } from "ngx-spinner";
import { UsersService } from "../../../../shared-ui/services";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {
  currentUser: any = new currentUser();
  loginMode = environment.loginMode;
  userId: number;
  loginInfo: any = {
    email: "",
    name: "",
    password: "",
    photo: "",
    remember: false,
    type: this.loginMode.LOGIN,
    // userType: environment.userType.USER
  };
  userDetails: any = {};
  constructor(
    private usersService: UsersService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private jwtService: JwtService,
    private alertService: AlertService,
    public OAuth: AuthService,
    public globalService: GlobalService,
    private spinner: NgxSpinnerService
  ) {
    // HERE WE WILL AUTOLOGIN FROM CI
    const cookieData = jwtService.getCookie(environment.cookieToken);
    if (cookieData) {
      this.loginInfo = jwtService.getCookie(environment.cookieToken);
    }
  }

  ngOnInit() {
    this.globalService.topscroll();
    this.currentUser = this.jwtService.getCurrentUser();
    this.route.params.subscribe((res) => {
      this.userId = res.id;
      if (this.currentUser) {
        if (this.userId) {
          this.doSignin(this.loginMode.AUTO_LOGIN);
        } else {
          this.router.navigate(["/dashboard"]);
        }
      } else {
        if (this.userId) {
          this.doSignin(this.loginMode.AUTO_LOGIN);
        }
      }
    });

    setTimeout(() => {
      this.globalService.setLoadingLabel("Loading... Please Wait.");
      this.spinner.hide();
    }, 2000);
  }

  doSignin(loginType?: string) {
    if (loginType) {
      this.loginInfo.type = loginType;
    }
    let loginInfo: any = {};
    if (this.userId) {
      loginInfo = { id: Number(this.userId), type: this.loginInfo.type };
    } else {
      loginInfo = this.loginInfo;
    }
    if (this.loginInfo.type === this.loginMode.LOGIN) {
      if (!this.loginInfo.email || !this.loginInfo.password) {
        this.toastr.error(
          "* Please fill all mandatory fields!",
          "Validation Error"
        );
        return false;
      } else if (loginInfo.remember) {
        this.jwtService.setCookie(environment.cookieToken, loginInfo);
      } else {
        this.jwtService.deleteCookie(environment.cookieToken);
      }
    }
    this.spinner.show();
    this.alertService.clear();
    this.usersService.doSignin(loginInfo).subscribe(
      (data) => {
        this.spinner.hide();
        if (data.status === 200) {
          this.jwtService.saveToken(data.data.password);
          this.jwtService.saveCurrentUser(JSON.stringify(data.data));
          this.toastr.success("You have logged In successfully.", "Sucess");
          this.globalService.sendActionChildToParent("loggedIn");
          this.router.navigate(["/dashboard"]);
        } else {
          this.toastr.warning(data.message, "Warning");
        }
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error(
          "There are some server error. Please check connection.",
          "Error"
        );
      }
    );
  }

  public socialSignIn(socialProvider: string) {
    let socialPlatformProvider;
    if (socialProvider === "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialProvider === "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }
    this.OAuth.signIn(socialPlatformProvider).then((socialusers) => {
      this.loginInfo.email = socialusers.email;
      this.loginInfo.name = socialusers.name;
      this.loginInfo.type = this.loginMode.GOOGLE_LOGIN;
      this.loginInfo.photo = socialusers.image;
      this.doSignin();
    });
  }
}

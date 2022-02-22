import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, Router } from "@angular/router";
import { GlobalService, UsersService } from "../../../shared-ui/services";

@Component({
  selector: "app-recover-password",
  templateUrl: "./recover-password.component.html",
  styleUrls: ["./recover-password.component.scss"],
})
export class RecoverPasswordComponent implements OnInit {
  userData = {
    password: "",
    confirmPassword: "",
  };
  successMessage: string;
  errorResponseMessage: string;
  recoverData: any;
  errorMessage = "New password and confirmation password do not match !";
  validPassword = true;
  userInfo: any = {};
  userId: any;
  link: any;
  expiredLinkErrorMsg: String = "";
  passwordEncrypt: any = {
    newPass: "password",
    confPass: "password",
  };

  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private usersService: UsersService,
    private router: Router,
    private globalService: GlobalService,
    private route: ActivatedRoute
  ) {
    this.globalService.topscroll();
    this.route.params.subscribe((res) => {
      this.userId = Number(res.userId);
      this.link = res.token;
    });
  }

  ngOnInit() {
    if (this.userId && this.link) {
      this.getUsersData();
    }
  }

  getUsersData() {
    this.expiredLinkErrorMsg = "";
    this.spinner.show();
    this.usersService
      .getUserInfo({ id: this.userId, forgot_password_link: this.link })
      .subscribe(
        (data) => {
          if (data.status === 200) {
            this.userInfo = data.data;
            if (!this.userInfo.forgot_password_link) {
              this.expiredLinkErrorMsg =
                "Forgot Password Link has been expired. Please check link or again you can request for forgot password!";
            }
            this.spinner.hide();
          } else {
            this.spinner.hide();
            this.expiredLinkErrorMsg =
              "Forgot Password Link has been expired. Please check link or again you can request for forgot password!";
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

  recoverPassword() {
    if (!this.userData.password) {
      this.toastr.error("Please enter your password.", "Error");
      return false;
    } else if (!this.userData.confirmPassword) {
      this.toastr.error("Please enter your confirm password.", "Error");
      return false;
    } else if (
      this.userData.password !== "" &&
      this.userData.confirmPassword !== "" &&
      this.userData.password !== this.userData.confirmPassword
    ) {
      return false;
    } else if (!this.validPassword) {
      return false;
    }
    const userNewInfo = {
      id: this.userId,
      forgot_password_link: "",
      forgot_password_status: 0,
      password: this.userData.password,
    };
    this.spinner.show();
    this.usersService.saveInfo(userNewInfo).subscribe(
      (data) => {
        this.spinner.hide();
        if (data.status === 200) {
          this.toastr.success(
            "Your password has been changed successfully. Please login to continue.",
            "Success"
          );
          setTimeout(() => {
            this.router.navigate(["/login"]);
          }, 1000);
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
  AvoidSpace(event?: any) {
    const k = event ? event.which : event.keyCode;
    if (k === 32) {
      return false;
    }
  }
  checkStrongPassword(str) {
    if (str) {
      this.validPassword = this.globalService.strongPassword(str);
    } else {
      this.validPassword = true;
    }
  }
  changeTextToPassword(inputText: any, key: any) {
    if (inputText === "password") {
      this.passwordEncrypt[key] = "text";
    } else {
      this.passwordEncrypt[key] = "password";
    }
  }
}

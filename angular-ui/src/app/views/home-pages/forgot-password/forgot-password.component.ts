import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { GlobalService, UsersService } from "../../../shared-ui/services";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  loading: boolean;
  errorMessage: string;
  successMessage: string;
  userData: any = { email: "" };
  emailLink: String = "";
  validEmail: Boolean = true;

  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private globalService: GlobalService,
    private usersService: UsersService
  ) {
    this.globalService.topscroll();
  }

  ngOnInit() {}
  forgotPassword() {
    this.successMessage = "";
    this.errorMessage = "";
    if (this.userData.email) {
      this.spinner.show();
      this.userData.email = this.userData.email.toLocaleLowerCase();
      this.usersService.forgotPassword(this.userData).subscribe(
        (data) => {
          if (data.status === 200) {
            this.toastr.success(
              "Please check your email, Reset password link has been sent.",
              "Success"
            );
            this.errorMessage = "";
            this.successMessage = data.message;
            this.userData = {
              email: "",
            };
          } else {
            // this.toastr.error(data.message, 'Error');
            this.successMessage = "";
            this.errorMessage = data.message;
            this.userData = {
              email: "",
            };
          }
          this.spinner.hide();
        },
        (error) => {
          this.spinner.hide();
          this.toastr.error(
            "There are some server error. Please check connection.",
            "Error"
          );
        }
      );
    } else {
      this.toastr.error(
        "Please enter your email address for the send email.",
        "Validation Error"
      );
    }
  }
  checkValidEmail(email?: string) {
    this.errorMessage = "";
    this.validEmail = this.globalService.ValidateEmail(email);
    return this.validEmail;
  }
}

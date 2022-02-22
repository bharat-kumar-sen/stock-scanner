import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { UserDetails } from "./signup.model";
import { currentUser } from "../../../layouts/home-layout/user.model";
import {
  UsersService,
  JwtService,
  GlobalService,
} from "../../../shared-ui/services";
import { AlertService } from "../../../shared-ui/alert/alert.service";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  currentUser: currentUser = new currentUser();
  userDetails: UserDetails = new UserDetails();

  requiredValidate: any = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confNewPassword: "",
  };
  alreadyEmailValidation: boolean = false;
  validEmail: boolean = true;
  constructor(
    private usersService: UsersService,
    private toastr: ToastrService,
    private router: Router,
    private jwtService: JwtService,
    private alertService: AlertService,
    private globalService: GlobalService
  ) {}

  ngOnInit() {
    this.currentUser = JSON.parse(this.jwtService.getCurrentUser());
    if (
      this.currentUser &&
      this.currentUser.role === environment.userType.ADMIN
    ) {
      this.router.navigate(["/dashboard"]);
    }
  }

  doSignup() {
    const objecKeys = Object.keys(this.requiredValidate);
    const self = this;
    var found = objecKeys.filter(function (obj) {
      return !self.userDetails[obj];
    });
    if (this.alreadyEmailValidation || !this.validEmail) {
      return false;
    }
    console.log("self.userDetails==========", self.userDetails);
    if (
      this.userDetails.password !== this.userDetails.confNewPassword ||
      found.length
    ) {
      this.alertService.error("*Please fill all mandatory fields!");
      setTimeout(() => {
        this.alertService.clear();
      }, 5000);
      return false;
    }

    this.usersService.doSignup(self.userDetails).subscribe((data) => {
      if (data.status == 200) {
        this.toastr.success(data.message, "Success");
        this.router.navigate(["/login"]);
      } else {
        this.alertService.error(data.message);
      }
    });
  }

  checkEmailAlreadyExists(email: string) {
    this.validEmail = this.globalService.ValidateEmail(email);
    if (this.validEmail) {
      this.alreadyEmailValidation = false;
      var postData = { email: email };
      this.usersService.emailAlreadyExits(postData).subscribe(
        (data) => {
          if (data.status === 200 && data.data.length) {
            this.alreadyEmailValidation = true;
          } else {
            this.alreadyEmailValidation = false;
          }
        },
        (error) => {
          this.alreadyEmailValidation = false;
        }
      );
    } else {
      this.alreadyEmailValidation = false;
      return this.validEmail;
    }
  }
}

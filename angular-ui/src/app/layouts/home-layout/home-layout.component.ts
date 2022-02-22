import { Component, OnInit, ViewChild } from "@angular/core";
import { currentUser } from "./user.model";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Subscription } from "rxjs";
import { JwtService } from "../../shared-ui/services/jwt.service";
import { GlobalService } from "../../shared-ui/services/global.service";
import * as $ from 'jquery'

@Component({
  selector: "app-home-layout",
  templateUrl: "./home-layout.component.html",
  styleUrls: ["./home-layout.component.scss"],
})
export class HomeLayoutComponent implements OnInit {
  subscription: Subscription;
  fullYear = new Date().getFullYear();
  currentUser: currentUser = new currentUser();
  quickSearchList: any[] = [];
  quickSearchText: any = {
    searchText: "",
  };
  loadingListings = false;
  constructor(
    private jwtService: JwtService,
    private router: Router,
    private globalService: GlobalService,
    private toastr: ToastrService
  ) {
    this.currentUser = this.jwtService.getCurrentUser();
    this.subscription = this.globalService
      .getActionChildToParent()
      .subscribe((message) => {
        if (message) {
          this.currentUser = this.jwtService.getCurrentUser();
        }
      });
  }

  ngOnInit() {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    if (this.currentUser) {
      this.router.navigate(["/dashboard"]);
    }
  }

  logout() {
    this.jwtService.destroyToken();
    this.router.navigate(["/"]);
    this.toastr.success("You have logged out successfully. ", "Success");
    this.globalService.sendActionChildToParent("loggedOut");
    this.currentUser = this.jwtService.getCurrentUser();
  }
}

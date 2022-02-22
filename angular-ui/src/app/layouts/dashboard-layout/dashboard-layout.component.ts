import { Component, Inject, OnInit, ElementRef } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { navItems } from "../../_nav";
import { Router } from "@angular/router";
import { currentUser } from "../home-layout/user.model";
import { JwtService } from "../../shared-ui/services/jwt.service";
import { GlobalService } from "../../shared-ui/services/global.service";
import { ToastrService } from "ngx-toastr";
import { Subscription } from "rxjs";
import { UsersService } from "../../shared-ui/services/users.service";

@Component({
  selector: "app-dashboard-layout",
  templateUrl: "./dashboard-layout.component.html",
  styleUrls: ["./dashboard-layout.component.scss"],
})
export class DashboardLayoutComponent implements OnInit {
  subscription: Subscription;
  currentUser: currentUser = new currentUser();
  showToggleRight = false;
  public navItems = navItems;
  constructor(
    private router: Router,
    private jwtService: JwtService,
    private globalService: GlobalService,
    private toastr: ToastrService,
    private usersService: UsersService,
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.globalService.topscroll();
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
    if (!this.currentUser) {
      this.router.navigate(["/#/login"]);
    }
  }

  showToggleMenu() {
    this.showToggleRight = !this.showToggleRight;
  }

  onClickedOutside(e: Event) {
    this.showToggleRight = false;
  }
  ngAfterViewInit(): void {
    $(".app").removeClass("sidebar-show");
    // $(".app").addClass("header-fixed sidebar-fixed sidebar-lg-hide");
  }

  logout() {
    this.usersService.logout().subscribe(
      (data) => {
        this.toastr.success("You have logged out successfully.", "Succss");
        this.jwtService.destroyToken();
        this.router.navigate(["/login"]);
      },
      (error) => {}
    );
  }
}

/**
 * Name: AuthGuard
 * @description: This Guard will use for authentication with jwt service.
 */
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";

import { Router } from "@angular/router";
import { JwtService } from "../services/jwt.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    /** Here We are checking jwt token have OR not*/
    if (this.jwtService.getToken()) {
      const user = this.jwtService.getCurrentUser();
      if (user) {
        return true;
      } else {
        this.router.navigate(["/"]);
      }
    } else {
      this.router.navigate(["/login"]);
    }
  }
}

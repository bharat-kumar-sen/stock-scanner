/**
 * Name: JwtService
 * @description: This Service will use for jwt related authentication.
 */
import { Injectable } from "@angular/core";
import * as CryptoJS from "crypto-js";
import { environment } from "../../../environments/environment";
import * as $ from "jquery";

@Injectable({
  providedIn: "root",
})
export class JwtService {
  constructor() {}
  loggedUserInfo: any = {};
  testscript: any = null;

  /** By it we will save jwt token in local storage */
  saveToken(token: string) {
    window.localStorage.setItem("stockScannerJwtToken", token);
  }

  /** By it we will get jwt token from local storage */
  getToken(): string {
    return window.localStorage.getItem("stockScannerJwtToken");
  }

  /** This method will save Current logged user info in local storage
   * @param {*} userDetails is a user information besides password.
   */
  saveCurrentUser(userDetails) {
    window.localStorage.setItem(
      "stockScannerCurrentUser",
      CryptoJS.AES.encrypt(
        userDetails,
        window.localStorage.getItem("stockScannerJwtToken")
      ).toString()
    );
  }

  /** This method will get current logged user information from local storage*/
  getCurrentUser(): any {
    if (window.localStorage.getItem("stockScannerJwtToken")) {
      this.loggedUserInfo = JSON.parse(
        CryptoJS.AES.decrypt(
          window.localStorage.getItem("stockScannerCurrentUser"),
          window.localStorage.getItem("stockScannerJwtToken")
        ).toString(CryptoJS.enc.Utf8)
      );
      return this.loggedUserInfo;
    } else {
      return false;
    }
  }
  /** If user logout mean a while call this function to destroy logged user information*/
  destroyToken() {
    window.localStorage.removeItem("stockScannerJwtToken");
    window.localStorage.removeItem("stockScannerCurrentUser");
  }

  setCookie(accessToken, cvalue) {
    const d = new Date();
    d.setTime(
      d.getTime() + environment.cookieExpirationTime * 24 * 60 * 60 * 1000
    );
    const expires = "expires=" + d.toUTCString();
    document.cookie =
      accessToken +
      "=" +
      CryptoJS.AES.encrypt(JSON.stringify(cvalue), accessToken).toString() +
      ";" +
      expires +
      ";path=/";
  }

  getCookie(accessToken) {
    const name = accessToken + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        const cookieData = JSON.parse(
          CryptoJS.AES.decrypt(
            c.substring(name.length, c.length),
            accessToken
          ).toString(CryptoJS.enc.Utf8)
        );
        return cookieData;
      }
    }
    return "";
  }

  deleteCookie(accessToken) {
    document.cookie =
      accessToken + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
}

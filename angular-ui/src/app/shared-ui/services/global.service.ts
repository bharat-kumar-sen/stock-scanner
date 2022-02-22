/**
 * Name: GlobalService
 * @description: GlobalService use for all ui global action to api query.
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { environment } from "../../../environments/environment";
import { JwtService } from "./jwt.service";
import { Router } from "@angular/router";
import { Md5 } from "ts-md5/dist/md5";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import * as $ from 'jquery'
import { UsersService } from "./users.service";



const md5 = new Md5();

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  filterBucket_id: any = "";
  unauthorizedError: any = "";
  alreadyApiCall = true;
  /** subject is user for global changes */
  private subject = new Subject<any>();
  /** Here is define base url for api hit it take from environment file*/
  baseUrl: any = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private usersService: UsersService,
    private jwtService: JwtService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  getActionChildToParent(): Observable<any> {
    return this.subject.asObservable();
  }

  sendActionChildToParent(action: string) {
    this.subject.next({ text: action });
  }

  /** this method get custom loading message*/
  getLoadingLabel(): Observable<any> {
    return this.subject.asObservable();
  }

  /** this method set custom loading message*/
  setLoadingLabel(action: string) {
    this.subject.next({ text: action });
  }

  /**
   * Name : ValidateEmail():
   * Description : This method will call as like global to check valid email.
   * @param is a entered email string.
   * @return it will return true/false.
   */
  public ValidateEmail(inputText: string) {
    // tslint:disable-next-line: prefer-const
    // let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const mailformat = "[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+";
    if (inputText.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Name : strongPassword():
   * Description : This method will call as like global to check strong password.
   * @param is a entered email string.
   * @return it will return true/false.
   */
  public strongPassword(inputText: string) {
    const passwordFormate = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
    if (passwordFormate.test(inputText)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Name : topscroll():
   * Description : This method will do top scroll if any component load it's call every component onInit function.
   * It's use for both front hand and backend hand.
   * We also verify all url ih here as per lms permission
   */
  public topscroll() {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    this.apiAuthentication();
  }

  apiAuthentication() {
    const userInfo = this.jwtService.getCurrentUser();
    if (userInfo && this.alreadyApiCall) {
      this.alreadyApiCall = false;
      const loginInfo = {
        email: userInfo.email,
        password: userInfo.password,
        type: environment.loginMode.AUTHENTICATION,
      };
      this.usersService.authentication(loginInfo).subscribe(
        (data) => {
          this.alreadyApiCall = true;
          if (
            !data.current_user 
          ) {
            this.spinner.hide();
            this.jwtService.destroyToken();
            this.router.navigate(["login"]);
          }
        },
        (error) => {
          this.spinner.hide();
        }
      );
    }
  }

  uploadFile(image: any, folderName?: any, fileKey?: any) {
    let newName;
    // if fileKey key name as file name or same file name;
    if (fileKey) {
      fileKey =
        Date.now() + "-" + Math.floor(Math.random() * 100000) + "-" + fileKey;
      fileKey = md5.appendStr(fileKey).end();
      const changeFileName = image.name.split(".");
      newName = fileKey + "." + changeFileName[1];
    } else {
      newName = image.name;
    }

    newName = newName.replace(/ /g, "-");
    // remove space
    folderName = folderName.replace(/ /g, "");

    // change umlaut word to english word
    folderName = folderName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    newName = folderName + "#" + newName;

    const formData = new FormData();
    formData.append("image", image, newName);
    return this.http.post(environment.baseUrl + "upload", formData);
  }

  deleteUploadFile(param: any) {
    return this.http.post(
      environment.baseUrl + "client/deleteUploadFile",
      param
    );
  }

  ascendingOrder(arrayData) {
    arrayData = arrayData.sort(function (x, y) {
      let a = x.name.toUpperCase(),
        b = y.name.toUpperCase();
      return a === b ? 0 : a > b ? 1 : -1;
    });
    return arrayData;
  }

  capitalize(word: string) {
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

  validURL(str: any) {
    var pattern = new RegExp(
      "^(http://www.|https://www.|http://|https://)[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$"
    ); // fragment locator
    return !!pattern.test(str);
  }
}

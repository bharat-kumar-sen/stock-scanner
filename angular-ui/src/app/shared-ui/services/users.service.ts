import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  users: String = "users";
  constructor(private http: HttpClient, private apiService: ApiService) {}

  public saveInfo(param: object): Observable<any> {
    return this.apiService.post(`${this.users}/save`, param).pipe(
      map((data) => {
        return data;
      })
    );
  }

  public delete(param: object): Observable<any> {
    return this.apiService.delete(`${this.users}/delete`, param).pipe(
      map((data) => {
        return data;
      })
    );
  }

  public emailAlreadyExits(param: any): any {
    return this.apiService.post(`${this.users}/emailAlreadyExits`, param).pipe(
      map((data) => {
        return data;
      })
    );
  }

  public doSignin(param: object): Observable<any> {
    return this.apiService.post(`${this.users}/doSignin`, param).pipe(
      map((data) => {
        return data;
      })
    );
  }

  public getdashboardInfo(param?: object): Observable<any> {
    param = param ? param : {};
    return this.apiService.post(`${this.users}/getdashboardInfo`, param).pipe(
      map((data) => {
        return data;
      })
    );
  }

  public getUserInfo(param: object): Observable<any> {
    return this.apiService.post(`${this.users}/getUserInfo`, param).pipe(
      map((data) => {
        return data;
      })
    );
  }
  public forgotPassword(param: object): Observable<any> {
    return this.apiService.post(`${this.users}/forgotPassword`, param).pipe(
      map((data) => {
        return data;
      })
    );
  }
  public logout(): Observable<any> {
    return this.apiService.post(`${this.users}/logout`).pipe(
      map((data) => {
        return data;
      })
    );
  }
  public authentication(param: object): Observable<any> {
    return this.apiService.post(`${this.users}/authentication`, param).pipe(
      map((data) => {
        return data;
      })
    );
  }

  public doSignup(param: object): Observable<any> {
    return this.apiService.post(`${this.users}/doSignup`, param).pipe(
      map((data) => {
        return data;
      })
    );
  }
}

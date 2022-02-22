import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  apiBase = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  post(url: string, param?): Observable<any> {
    const apiURL = this.apiBase + url;
    return this.httpClient
      .post(apiURL, param, { withCredentials: true })
      .pipe(map((res) => res));
  }

  get(url: string): Observable<any> {
    console.log('cryptoservice api');
    const apiURL = this.apiBase + url;
    return this.httpClient.get(apiURL).pipe(map((res) => res));
  }

  delete(url: string, param?): Observable<any> {
    const apiURL = this.apiBase + url;
    return this.httpClient
      .post(apiURL, param, { withCredentials: true })
      .pipe(map((res) => res));
  }
}

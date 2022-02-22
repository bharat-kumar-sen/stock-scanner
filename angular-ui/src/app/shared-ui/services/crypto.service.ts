import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class CryptoService {
  crypto: String = "crypto";
  constructor(private http: HttpClient, private apiService: ApiService) {}

  public saveCryptoSymbol(param: object): Observable<any> {
    return this.apiService.post(`${this.crypto}/saveCryptoSymbol`, param).pipe(
      map((data) => {
        return data;
      })
    );
  }

  public list(param?: object): Observable<any> {
    console.log("call cryptoservice");
    return this.apiService.get(`${this.crypto}/getCryptoSymbol`).pipe(
      map((data) => {
        console.log("data", data);
        return data;
      })
    );
  }

  public getCryptoSymbolLiveDetails(param?: object): Observable<any> {
    return this.apiService.get(`${this.crypto}/getCryptoSymbolDetails`).pipe(
      map((data) => {
        console.log("data", data);
        return data;
      })
    );
  }
  public watchList(param?: object): Observable<any> {
    return this.apiService.get(`${this.crypto}/watchList`).pipe(
      map((data) => {
        console.log("data", data);
        return data;
      })
    );
  }

  public delete(param: object): Observable<any> {
    return this.apiService
      .delete(`${this.crypto}/deleteCryptoSymbol`, param)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}

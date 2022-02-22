import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  stocks: String = 'stocks';
  constructor(private http: HttpClient, private apiService: ApiService) {}

  public list(param?: object): Observable<any> {
    return this.apiService.post(`${this.stocks}/list`, param).pipe(
      map((data) => {
        console.log('data', data);
        return data;
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://localhost:44333/api";
  public count = 0;

  constructor(private http:HttpClient) { }

  getProductsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/products');
  }

  getCoinsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/coins');
  }
}

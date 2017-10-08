import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  url: string = "http://13.82.91.182:8080/api/"

  constructor(private _http: Http) {
    console.log('Started data service')
  }

  public getUsers() {
    return this._http.get(this.url + 'allusers')
      .map(res => res.json())
  }

}

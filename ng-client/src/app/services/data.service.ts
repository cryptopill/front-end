import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';

@Injectable()
export class DataService {

  url: string = "http://13.82.91.182:8080"
  private socket;

  constructor(private _http: Http) {
    console.log('Started data service')
  }

  public getUsers() {
    return this._http.get(this.url + '/api/allusers')
      .map(res => res.json())
  }

  getUpdate() {
    let observable = new Observable(observer => {
      this.socket = io(this.url)

      this.socket.on('updatemeds', data => {
        observer.next(data)
      });

      return () => {
        this.socket.disconnect()
      }
    })

    return observable
  }

}

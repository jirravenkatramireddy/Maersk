import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ReplaySubject, of, BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  // vessselList$: Observable<any>;
  // private vessselListSubject = new Subject<any>();
  private _data = new ReplaySubject<any>(1);
  get data() {
    return this._data;
  }
  public token: string;
  private headerElements = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  private headerOptions = ({
    headers: this.headerElements
  });
  // private headerOptns = ({
  //   headers: this.header
  // });
  constructor(private http: HttpClient) {
    // this.vessselList$ = this.vessselListSubject.asObservable();
  }

  login(bodyRequest) {
    return this.http.post(environment.apiURL + '/login', bodyRequest, this.headerOptions).pipe(map((document) => {
      let doc: any = document;
      this.token = doc.token;
      return document;
    }));
  }
  vessselList(bodyRequest) {
    console.log("token", this.token);
    if (!this.token) {
      this.token = sessionStorage.getItem('token')
    }
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + this.token
    });
    const headerOptns = ({
      headers: header
    });
    return this.http.post(environment.apiURL + '/retrieveEDIListVD', bodyRequest, headerOptns).pipe(map((document) => {
      return document;
    }));
    // this.vessselListSubject.next(dataMap);
    // dataMap.subscribe(this._data);
  }
  vessselDetails(bodyRequest) {
    console.log("token", this.token);
    if (!this.token) {
      this.token = sessionStorage.getItem('token')
    }
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + this.token
    });
    const headerOptns = ({
      headers: header
    });
    return this.http.post(environment.apiURL + '/getAllDisputeContainers', bodyRequest, headerOptns).pipe(map((document) => {
      return document;
    }));
    // this.vessselListSubject.next(dataMap);
    // dataMap.subscribe(this._data);
  }
  anomalies(bodyRequest) {
    console.log("token", this.token);
    if (!this.token) {
      this.token = sessionStorage.getItem('token')
    }
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + this.token
    });
    const headerOptns = ({
      headers: header
    });
    return this.http.post(environment.apiURL + '/retrieveEDIAnomalies', bodyRequest, headerOptns).pipe(map((document) => {
      return document;
    }));
  }
  AcceptOrReject(bodyRequest) {
    console.log("token", this.token);
    if (!this.token) {
      this.token = sessionStorage.getItem('token')
    }
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + this.token
    });
    const headerOptns = ({
      headers: header
    });
    return this.http.post(environment.apiURL + '/updateStatus', bodyRequest, headerOptns).pipe(map((document) => {
      return document;
    }));
  }
  ReasonCode(bodyRequest) {
    console.log("token", this.token);
    if (!this.token) {
      this.token = sessionStorage.getItem('token')
    }
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + this.token
    });
    const headerOptns = ({
      headers: header
    });
    return this.http.post(environment.apiURL + '/updateReason', bodyRequest, headerOptns).pipe(map((document) => {
      return document;
    }));
  }
  gateIngateOut(bodyRequest) {
    console.log("token", this.token);
    if (!this.token) {
      this.token = sessionStorage.getItem('token')
    }
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + this.token
    });
    const headerOptns = ({
      headers: header
    });
    return this.http.post(environment.apiURL + '/retrieveGetInGetOut', bodyRequest, headerOptns).pipe(map((document) => {
      return document;
    }));
  }
}

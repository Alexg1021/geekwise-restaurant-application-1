import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getOrders() {
    return this._http.get('/orders')
  }

  deleteOrder(id) {
    return this._http.delete(`/vieworders/${id}`)
  }



}

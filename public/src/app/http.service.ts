import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getOrders() {
    return this._http.get('/view')
  }

  newOrder(orders){
    return this._http.post('/add', orders)
  }

  deleteOrders(id){
    return this._http.delete(`/view/${id}`)
  }

}

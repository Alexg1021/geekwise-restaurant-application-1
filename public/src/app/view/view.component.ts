import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  orders: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getOrders(); 
  }

  getOrders(){
    this._httpService.getOrders().subscribe( data => {
      console.log('got all ordrs', data)
      this.orders = data['data']
    })
  }

  deleteOrders(id){
    this._httpService.deleteOrders(id).subscribe( data => {
      console.log('deleted')
      this.getOrders();
    })
  }

}


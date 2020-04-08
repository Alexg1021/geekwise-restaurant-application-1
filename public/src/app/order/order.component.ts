import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  newOrder = {
    'name': '',
    'qty': ''
  }

  orderError = {
    'name': '',
    'qty': ''
  }

  constructor(private _httpService: HttpService,
    private _router: Router) { }

  ngOnInit() {
  }
  
  onSubmit() {
    this._httpService.newOrder(this.newOrder).subscribe(data => {
      console.log(data)
      this.orderError = {
        'name': '',
        'qty': ''
      };
      if (data['message'] == "error") {
        console.log('there was an error')
        if (data['error']['errors']['name']) {
          this.orderError['name'] = data['error']['errors']['name']['message']
        }
        if (data['error']['errors']['qty']) {
          this.orderError['qty'] = data['error']['errors']['qty']['message']
        }
      } else {
        console.log('success')
        this.newOrder = {
          'name': '',
          'qty': ''
        }
        alert("Thank You for Your Order!");
        this.goHome();
      }
    })
  }

  goHome() {
    this._router.navigate(['/vieworders']);
  }

}

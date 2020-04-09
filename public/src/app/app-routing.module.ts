import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'order', component: OrderComponent },
  { path: 'vieworders', component: ViewComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

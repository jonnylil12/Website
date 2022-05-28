import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './pages/homepage/homepage.component';
import {UserPageComponent} from './pages/userpage/userpage.component';
import {LoginPageComponent} from './pages/loginpage/loginpage.component';
import {NotFoundPageComponent} from './pages/notfoundpage/notfoundpage.component';
const routes: Routes = [
  {path:"www.davidabdo.com/login" ,component: LoginPageComponent },
  {path:"www.davidabdo.com/account" ,component: UserPageComponent },
  {path:"www.davidabdo.com" , component: HomePageComponent },
  {path:"" , redirectTo:"/www.davidabdo.com" , pathMatch:"full"},
  {path: "**" ,component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

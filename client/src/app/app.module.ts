import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

import { TableviewComponent } from './components/tableview/tableview.component';
import { DynamicFormComponent } from './components/dynamicform/dynamicform.component';
import { HomePageComponent } from './pages/homepage/homepage.component';
import { UserPageComponent } from './pages/userpage/userpage.component';
import { LoginPageComponent } from './pages/loginpage/loginpage.component';
import { NotFoundPageComponent } from './pages/notfoundpage/notfoundpage.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    TableviewComponent,
    HomePageComponent,
    UserPageComponent,
    DynamicFormComponent,
    LoginPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

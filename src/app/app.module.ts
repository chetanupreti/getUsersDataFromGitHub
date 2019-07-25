import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetUserDetailsComponent } from './user/get-user-details/get-user-details.component';
import { ShowUserDetailsComponent } from './user/show-user-details/show-user-details.component';
import { SharedModule } from "../library/shared-module/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from "./user/user-service/user.service";
@NgModule({
  declarations: [
    AppComponent,
    GetUserDetailsComponent,
    ShowUserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

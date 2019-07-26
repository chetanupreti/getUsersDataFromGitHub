import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetUserDetailsComponent } from './user/get-user-details/get-user-details.component';
import { ShowUserDetailsComponent } from './user/show-user-details/show-user-details.component';
import { SharedModule } from "../library/shared-module/shared.module";
import { UserService } from "./user/user-service/user.service";
@NgModule({
  declarations: [
    AppComponent,
    GetUserDetailsComponent,
    ShowUserDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

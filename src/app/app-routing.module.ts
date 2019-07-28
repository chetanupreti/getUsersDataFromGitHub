import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetUserDetailsComponent } from './user/get-user-details/get-user-details.component';
import { ShowUserDetailsComponent } from './user/show-user-details/show-user-details.component';

const routes: Routes = [
  {path:'', component: GetUserDetailsComponent},
  {path: 'users', component: ShowUserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

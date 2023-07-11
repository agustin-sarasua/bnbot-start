import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: 'business', component: BusinessProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

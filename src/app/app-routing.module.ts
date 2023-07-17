import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { CalendarComponent } from './calendar/calendar.component';
import { CreatePropertyComponent } from './create-property/create-property.component';

const routes: Routes = [
  { path: 'business', component: BusinessProfileComponent, canActivate: [AuthGuard] },
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
  { path: 'create-property', component: CreatePropertyComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

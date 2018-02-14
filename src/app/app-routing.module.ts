import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { MapComponent } from './map/map.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SiteComponent } from './site/site.component';
import { EventComponent } from './event/event.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
/* import { ProfileComponent } from './profile/profile.component'; */

const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' }, // Página Inicio
  { path: '/map', component: MapComponent },
  { path: '/site', component: SiteComponent },
  { path: '/event', component: EventComponent },
  { path: '/register', component: RegisterComponent },
  { path: '/login', component: LoginComponent }
  /* { path: '/profile', component: ProfileComponent }, */
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

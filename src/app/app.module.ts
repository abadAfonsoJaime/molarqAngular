import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Added by ng generate component xxxxx
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SiteComponent } from './site/site.component';
import { EventComponent } from './event/event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddSiteComponent } from './add-site/add-site.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { CalendarComponent } from './calendar/calendar.component';

// Added by ng generate module xxxxx
import { AppRoutingModule } from './/app-routing.module';
import { MenuPublicComponent } from './menu-public/menu-public.component';
import { MenuPrivateComponent } from './menu-private/menu-private.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FooterComponent,
    HeaderComponent,
    ProfileComponent,
    CommentsComponent,
    LoginComponent,
    RegisterComponent,
    SiteComponent,
    EventComponent,
    AddEventComponent,
    AddSiteComponent,
    AdminViewComponent,
    CalendarComponent,
    MenuPublicComponent,
    MenuPrivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

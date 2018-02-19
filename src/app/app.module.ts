import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';


// Routed Components
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SuccessComponent } from './components/success/success.component';

// Components
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { OrderProgressBarComponent } from './components/order-progress-bar/order-progress-bar.component';
import { StylistQuestionComponent } from './components/stylist-question/stylist-question.component';
import { MoreDetailsComponent } from './components/more-details/more-details.component';
import { PhoneInfoComponent } from './components/phone-info/phone-info.component';
import { AppointmentDatesComponent } from './components/appointment-dates/appointment-dates.component';

import { AppointmentDatesService } from './components/appointment-dates/appointment-dates.service';
import { ScheduleService } from './components/schedule/schedule.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/landing-page',  pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'success', component: SuccessComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    
    LandingPageComponent,
    ScheduleComponent,
    SuccessComponent,

    TopBarComponent,
    OrderProgressBarComponent,
    StylistQuestionComponent,
    MoreDetailsComponent,
    PhoneInfoComponent,
    AppointmentDatesComponent  
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AppointmentDatesService,
    ScheduleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

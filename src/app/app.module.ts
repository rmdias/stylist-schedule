import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

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
    PhoneInfoComponent  
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SuccessComponent } from './components/success/success.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { OrderProgressBarComponent } from './components/order-progress-bar/order-progress-bar.component';
import { StylistQuestionComponent } from './components/stylist-question/stylist-question.component';
import { MoreDetailsComponent } from './components/more-details/more-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/landing-page',  pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'success', component: SuccessComponent }
];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LandingPageComponent,
        ScheduleComponent,
        SuccessComponent,
    
        TopBarComponent,
        OrderProgressBarComponent,
        StylistQuestionComponent,
        MoreDetailsComponent
      ],
      imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

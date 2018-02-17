import { TestBed, async } from '@angular/core/testing';

import { OrderProgressBarComponent } from './order-progress-bar.component';

import { personalisationProgress } from './personalisation-progress.interface';

const personalisationProgress:personalisationProgress = {
  style: 'progress-100',
  profile: 'progress-100',
  box: 'progress-25'
};

let component, fixture, compiled;

describe('OrderProgressBarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OrderProgressBarComponent  
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderProgressBarComponent);
    component = fixture.debugElement.componentInstance;    
    compiled = fixture.debugElement.nativeElement;

    component.personalisationProgress = personalisationProgress;
    fixture.detectChanges();
  }));

  it('should have the required data to load the component create the app', () => {
    expect(component.personalisationProgress).toBe(personalisationProgress);
  });

  it('should render progress bar according the parameter `personalisationProgress`', () => {
    expect(compiled.querySelector('.stage-1').classList[2]).toBe(personalisationProgress.style);
    expect(compiled.querySelector('.stage-2').classList[2]).toBe(personalisationProgress.profile);
    expect(compiled.querySelector('.stage-3').classList[2]).toBe(personalisationProgress.box);
  });
});

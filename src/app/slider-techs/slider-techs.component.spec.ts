import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTechsComponent } from './slider-techs.component';

describe('SliderTechsComponent', () => {
  let component: SliderTechsComponent;
  let fixture: ComponentFixture<SliderTechsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderTechsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderTechsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

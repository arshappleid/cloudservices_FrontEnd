import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDevlopmentComponent } from './feature-devlopment.component';

describe('FeatureDevlopmentComponent', () => {
  let component: FeatureDevlopmentComponent;
  let fixture: ComponentFixture<FeatureDevlopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureDevlopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureDevlopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

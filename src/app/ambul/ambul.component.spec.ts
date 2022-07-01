import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulComponent } from './ambul.component';

describe('AmbulComponent', () => {
  let component: AmbulComponent;
  let fixture: ComponentFixture<AmbulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

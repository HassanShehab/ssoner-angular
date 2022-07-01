import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GustComponent } from './gust.component';

describe('GustComponent', () => {
  let component: GustComponent;
  let fixture: ComponentFixture<GustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

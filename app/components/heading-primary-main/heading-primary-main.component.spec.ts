import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingPrimaryMainComponent } from './heading-primary-main.component';

describe('HeadingPrimaryMainComponent', () => {
  let component: HeadingPrimaryMainComponent;
  let fixture: ComponentFixture<HeadingPrimaryMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingPrimaryMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingPrimaryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcumpComponent } from './breadcump.component';

describe('BreadcumpComponent', () => {
  let component: BreadcumpComponent;
  let fixture: ComponentFixture<BreadcumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcumpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

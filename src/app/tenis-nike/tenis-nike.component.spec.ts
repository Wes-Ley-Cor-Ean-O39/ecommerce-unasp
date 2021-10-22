import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenisNikeComponent } from './tenis-nike.component';

describe('TenisNikeComponent', () => {
  let component: TenisNikeComponent;
  let fixture: ComponentFixture<TenisNikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenisNikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenisNikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

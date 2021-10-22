import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenisAdidasComponent } from './tenis-adidas.component';

describe('TenisAdidasComponent', () => {
  let component: TenisAdidasComponent;
  let fixture: ComponentFixture<TenisAdidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenisAdidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenisAdidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

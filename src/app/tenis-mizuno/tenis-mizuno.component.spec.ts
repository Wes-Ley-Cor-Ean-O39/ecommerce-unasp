import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenisMizunoComponent } from './tenis-mizuno.component';

describe('TenisMizunoComponent', () => {
  let component: TenisMizunoComponent;
  let fixture: ComponentFixture<TenisMizunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenisMizunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenisMizunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

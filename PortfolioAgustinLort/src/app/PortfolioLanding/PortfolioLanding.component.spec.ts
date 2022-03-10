import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotodeportadaComponent } from './fotodeportada.component';

describe('FotodeportadaComponent', () => {
  let component: FotodeportadaComponent;
  let fixture: ComponentFixture<FotodeportadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotodeportadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotodeportadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

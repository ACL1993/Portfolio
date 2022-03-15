import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarradetareasComponent } from './barradetareas.component';

describe('BarradetareasComponent', () => {
  let component: BarradetareasComponent;
  let fixture: ComponentFixture<BarradetareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarradetareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarradetareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

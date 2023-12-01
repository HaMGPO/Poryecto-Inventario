import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoTendenciaComponent } from './grafico-tendencia.component';

describe('GraficoTendenciaComponent', () => {
  let component: GraficoTendenciaComponent;
  let fixture: ComponentFixture<GraficoTendenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoTendenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoTendenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

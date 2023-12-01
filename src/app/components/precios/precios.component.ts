import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { productoPrecioDto } from 'src/app/utils/models/producto-precio-dto.model';
import { PRODUCTOS_PRUEBA } from '../../utils/mocks/producto-precio-mock';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiAccessService } from 'src/app/services/api-access.service';
import { GraficoTendenciaComponent } from '../grafico-tendencia/grafico-tendencia.component';

@Component({
  selector: 'componente-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})

export class PreciosComponent implements OnInit {

  preciosProducto: productoPrecioDto[] | undefined;
  productoSeleccionado: productoPrecioDto | undefined;
  productos: productoPrecioDto[] | undefined;

  minDate!: Date ;
  maxDate!: Date;

  @ViewChild(GraficoTendenciaComponent) graficoTendencia!: GraficoTendenciaComponent;
  
  parametrosData = new FormGroup({
    fecha: new FormControl(null, Validators.required)
  });

  constructor(private apiService: ApiAccessService) {
    this.cargarInfoProductos();
   }

  ngOnInit() { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 11, 0, 1);
    this.maxDate = new Date(currentYear + 0, 11, 31);
  }

  alSeleccionarProducto(producto: productoPrecioDto) {
    this.productoSeleccionado = producto;
  } 

  buscarPrecios() {

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Basic ` + btoa('hpinto:14122001'),
      });

      
        let nombreP = this.productoSeleccionado!.nombre;
        let fechaP = this.formatearFecha(
            new Date(this.parametrosData.controls['fecha'].value!)
          );

      this.apiService.buscarProductoPorFecha(headers, nombreP, fechaP).pipe().subscribe(
        {

          next: (response: productoPrecioDto[]) => {
            this.preciosProducto = response;
          },

          error: () => {
            console.log('no data')
          },

        }
      );
  }

  cargarInfoProductos(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ` + btoa('hpinto:14122001'),
    });

    return this.apiService.cargarInfoInicial(headers).pipe().subscribe(
      {
        
        next: (response: String[]) => {
          this.productos = response.map(p => ({id: response.indexOf(p), nombre: p}) as productoPrecioDto)
        },

        error: () => {
          return "No data";
        },

      }
    );
  }

  formatearFecha(fecha: Date) {
    // Obtiene los componentes de la fecha
    var año = fecha.getFullYear().toString().slice(-2); // Obtiene los últimos dos dígitos del año
    var mes = ('0' + (fecha.getMonth() + 1)).slice(-2); // Agrega un cero al mes si es necesario
    var dia = ('0' + fecha.getDate()).slice(-2); // Agrega un cero al día si es necesario
  
    // Formatea la fecha en el formato YY-dd-mm
    var fechaFormateada = año + '-' + dia + '-' + mes;
  
    return fechaFormateada;
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}

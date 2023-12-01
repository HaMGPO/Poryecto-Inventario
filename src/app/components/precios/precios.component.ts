import { Component, OnInit } from '@angular/core';
import { productoPrecioDto } from 'src/app/utils/models/producto-precio-dto.model';
import { PRODUCTOS_PRUEBA } from '../../utils/mocks/producto-precio-mock';

@Component({
  selector: 'componente-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {
  productoSeleccionado: productoPrecioDto | undefined;
  productos: productoPrecioDto[] = PRODUCTOS_PRUEBA;

  constructor() { }

  ngOnInit() { }

  alSeleccionarProducto(producto: productoPrecioDto) {
    this.productoSeleccionado = producto;
  } 
}

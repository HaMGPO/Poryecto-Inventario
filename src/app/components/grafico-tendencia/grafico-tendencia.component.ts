import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { productoPrecioDto } from 'src/app/utils/models/producto-precio-dto.model';
import Chart from 'chart.js/auto';


@Component({
  selector: 'grafico-tendencia-producto',
  templateUrl: './grafico-tendencia.component.html',
  styleUrls: ['./grafico-tendencia.component.css']
})
export class GraficoTendenciaComponent implements OnInit{
  @Input() data!: productoPrecioDto[];
  anhos: String[] | undefined;
  precios: String[] | undefined;
  public chart: any;

  constructor() { }

  ngOnInit(): void {
    this.convertirData();
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.anhos,
	       datasets: [
          {
            label: "Prices",
            data: this.precios,
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['data']) {
      this.limpiar();
      this.ngOnInit();
    }
  }

  limpiar() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  convertirData() {
    console.log(this.data)
    this.anhos =  this.data.map(y => this.formatDate(y.fecha!));
    this.precios = this.data.map(x => String(x.precio!));
  }

   formatDate(date: Date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  addData() {
    this.chart.data.labels = this.anhos
    this.chart.data.datasets[0].data = this.precios
    this.chart.update();
  }

 removeData() {
    this.chart.data.labels = [0]
    this.chart.data.datasets[0].data = [];
    this.chart.update();
}
}


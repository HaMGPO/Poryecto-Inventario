import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import { productoPrecioDto } from '../utils/models/producto-precio-dto.model';

@Injectable({
  providedIn: 'root'
})
export class ApiAccessService {

  constructor(
    private httpClient: HttpClient
    ) { }

  public buscarProductoPorFecha(
    h: HttpHeaders, producto: String, fecha: string 
  ): Observable<productoPrecioDto[]> {

    const apiUrl = 'http://192.168.56.101:8000';
    const endPoint: string = 'upb/inventory';
    const params: string = `/${producto}/${fecha}`;
    const url = `${apiUrl}/${endPoint}/${params}/todos`; // api/form/producto/fecha

    return this.httpClient.get<productoPrecioDto[]>(url, 
    { 
      headers: h,
    });
  }

  public cargarInfoInicial(
    h: HttpHeaders
  ): Observable<String[]> {

    const apiUrl = 'http://192.168.56.101:8000';
    const endPoint: string = 'upb/inventory';
    const url = `${apiUrl}/${endPoint}`; // api/form

    return this.httpClient.get<String[]>(url, 
    { 
      headers: h,
    });
  }
  
}

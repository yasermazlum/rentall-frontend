import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl: string = "https://localhost:44384/Api/brands/getall"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl)
  }
}

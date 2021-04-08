import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = "https://localhost:44384/Api/Cars/getall"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl)
  }
}

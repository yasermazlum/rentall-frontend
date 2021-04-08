import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDtoResponseModel } from '../models/carDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDtoService {
  apiUrl: string = "https://localhost:44384/Api/Cars/getalldetails"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<CarDtoResponseModel> {
    return this.httpClient.get<CarDtoResponseModel>(this.apiUrl)
  }
}

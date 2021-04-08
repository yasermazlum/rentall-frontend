import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl: string = "https://localhost:44384/Api/Colors/getall"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl)
  }
}

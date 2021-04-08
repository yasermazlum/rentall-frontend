import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/carDto';
import { CarDtoService } from 'src/app/services/car-dto.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  dataLoaded = false;
  cars: CarDto[] = []

  constructor(private carDtoService:CarDtoService) { }

  ngOnInit(): void {
    this.getCars()
  }

  getCars() {
    this.carDtoService.getAll().subscribe(r => {      
      this.cars = r.data
      this.dataLoaded = true;
    })
  }
}

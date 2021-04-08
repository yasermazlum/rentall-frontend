import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  dataLoaded = false
  brands:Brand[]=[]

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.brandService.getAll().subscribe(r=>{
      this.brands = r.data
      this.dataLoaded=true
    })
  }

}

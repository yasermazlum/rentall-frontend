import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  dataLoaded = false
  colors:Color[]=[]

  constructor(private colorService:ColorService ) {}

  ngOnInit(): void {
    this.getColors()
  }

  getColors(){
    this.colorService.getAll().subscribe(r => {
      this.colors=r.data
      this.dataLoaded=true
    })
  }

}

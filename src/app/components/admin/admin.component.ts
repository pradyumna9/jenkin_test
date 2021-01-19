import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
public cars:any;
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars()
  }
  getCars(){
    return this.carService.getCars().subscribe(
data => this.cars=data,
err => console.error(err),
() =>console.log('Car Loaded')
    );
  }

}

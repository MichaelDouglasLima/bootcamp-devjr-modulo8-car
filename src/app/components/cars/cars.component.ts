import { Component } from '@angular/core';
import { Car } from '../../Car'

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  car : Car = { } as Car;

  cars : Car[]  = [];

  saveCar() {
    this.car.id = this.cars.length + 1;
    this.cars.push(this.car);
    this.car = { } as Car; 
  }

}

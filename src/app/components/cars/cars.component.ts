import { Component } from '@angular/core';
import { Car } from '../../Car'

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  car : Car = { } as Car;
  isUpdate : boolean = false;
  idCount : number = 4;

  cars : Car[]  = [
    {
      id: 1,
      name: " Veloz 2000",
      automaker: "SuperCars Inc.",
      price: 250000,
      year: 2022
    },
    {
      id: 2,
      name: "Elegante 500",
      automaker: "Luxo Motors",
      price: 120000,
      year: 2021
    },
    {
      id: 3,
      name: "Aventureiro X7",
      automaker: "OffRoad Vehicles",
      price: 180000,
      year: 2023
    }
  ];

  saveCar(){

    if (!this.isUpdate) {
      this.car.id = this.idCount;
      this.idCount++;
      this.cars.push(this.car);
    }
    
    this.car = { } as Car; 
    this.isUpdate = false;

  }

  update(selectedCar:Car) {
    this.car = selectedCar;
    this.isUpdate = true;
  }

  remove(removeCar:Car){
    
    if (removeCar == this.car) {
      this.car = { } as Car;
      this.isUpdate = false;
    }

    this.cars = this.cars.filter( c => c !== removeCar);
    
  }

}

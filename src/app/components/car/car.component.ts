import { Component, Input } from '@angular/core';
import { Car } from '../../Car'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

  @Input()
  car : Car = { } as Car;

}

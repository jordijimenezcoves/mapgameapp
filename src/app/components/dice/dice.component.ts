import { Component } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {

  number = '?';

  constructor( private mainService:MainService ) { }

  generateRandomInteger(min:number, max:number) {
    return Math.floor(min + Math.random()*(max + 1 - min));
  }

  roll() {
    this.number = '?';
    this.mainService.animateCSS('#number','fadeInLeft');
    this.mainService.animateCSS('#dice','rubberBand').then(() => {
      this.number = Number(this.generateRandomInteger(1,6)).toString();
    });
  }

}

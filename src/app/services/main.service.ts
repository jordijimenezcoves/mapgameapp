import { Injectable } from '@angular/core';
import { Conqueror } from '../models/conqueror.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private selectedConqueror: Conqueror = {
    id: 'conq-bor',
    name: 'Borrar',
    color: 'white',
    flag: 'clear.png'
  };

  constructor() { }

  setSelectedConqueror(conqueror:Conqueror) {
    this.selectedConqueror = conqueror;
    console.log('Selected conqueror:', this.selectedConqueror.name);
  }

  getSelectedConqueror(): Conqueror {
    return this.selectedConqueror;
  }

  animateCSS(element:any, animation:string, prefix = 'animate__') {
    // We create a Promise and return it
    let promise = new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;
      const node = document.querySelector(element);

      node.classList.add(`${prefix}animated`, animationName);

      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd(event:any) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
      }

      node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });
    return promise;
  }

}

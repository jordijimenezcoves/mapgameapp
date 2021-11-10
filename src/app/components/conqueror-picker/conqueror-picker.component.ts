import { Component, OnInit } from '@angular/core';
import { Conqueror } from 'src/app/models/conqueror.model';
import { MainService } from '../../services/main.service';


@Component({
  selector: 'app-conqueror-picker',
  templateUrl: './conqueror-picker.component.html',
  styleUrls: ['./conqueror-picker.component.css']
})
export class ConquerorPickerComponent implements OnInit {

  conquerors: Conqueror[] = [];
  selectedConqueror: string = '';

  constructor( private mainService: MainService ) { }

  ngOnInit(): void {
    this.conquerors = [
      {
        id: 'conq-esp',
        name: 'Naranja',
        color: '#F98520',
        flag: 'Napoleon1.png'
      },
      {
        id: 'conq-ita',
        name: 'Verde',
        color: '#81E23B',
        flag: 'Napoleon2.png'
      },
      {
        id: 'conq-fra',
        name: 'Azul',
        color: '#26A8FC',
        flag: 'Napoleon3.png'
      },
      {
        id: 'conq-uk',
        name: 'Rojo',
        color: '#F74A4C',
        flag: 'Napoleon4.png'
      },
      {
        id: 'conq-ale',
        name: 'Morado',
        color: '#9D50FE',
        flag: 'Napoleon5.png'
      },
      {
        id: 'conq-portugal',
        name: 'Cian',
        color: '#24FFE7',
        flag: 'Napoleon6.png'
      },
      {
        id: 'conq-bel',
        name: 'Rosa',
        color: '#F754C8',
        flag: 'Napoleon7.png'
      },
      {
        id: 'conq-bor',
        name: 'Borrar',
        color: 'white',
        flag: 'clear.png'
      }
    ];
  }

  onClick(conqueror:Conqueror) {
    this.mainService.setSelectedConqueror(conqueror);
    this.selectedConqueror = conqueror.name;
    this.mainService.animateCSS(`#${conqueror.id}`,'flip');
  }

}

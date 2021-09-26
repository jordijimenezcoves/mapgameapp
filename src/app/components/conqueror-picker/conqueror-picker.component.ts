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
        name: 'España',
        color: '#F98520',
        flag: 'spainflag.png'
      },
      {
        id: 'conq-ita',
        name: 'Italia',
        color: '#81E23B',
        flag: 'italyflag.png'
      },
      {
        id: 'conq-fra',
        name: 'Francia',
        color: '#26A8FC',
        flag: 'franceflag.png'
      },
      {
        id: 'conq-uk',
        name: 'Reino Unido',
        color: '#F74A4C',
        flag: 'ukflag.png'
      },
      {
        id: 'conq-ale',
        name: 'Alemania',
        color: '#9D50FE',
        flag: 'germanyflag.png'
      },
      {
        id: 'conq-portugal',
        name: 'Portugal',
        color: '#24FFE7',
        flag: 'portugalflag.png'
      },
      {
        id: 'conq-bel',
        name: 'Bélgica',
        color: '#F754C8',
        flag: 'belgiumflag.png'
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

import { Component } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  constructor( private mainService:MainService ) { }

  onClick(region:any) {
    let clickedRegionId = region.target.attributes['id'].value;
    let clickedRegionName = region.target.attributes['data-name'].value;
    let selectedConquerorColor = this.mainService.getSelectedConqueror().color;
    console.log('Clicked region:', clickedRegionName);
    document.getElementById(clickedRegionId)?.setAttribute('style',`fill:${selectedConquerorColor}`);
  }

}

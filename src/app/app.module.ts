import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { DiceComponent } from './components/dice/dice.component';
import { ConquerorPickerComponent } from './components/conqueror-picker/conqueror-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    DiceComponent,
    ConquerorPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

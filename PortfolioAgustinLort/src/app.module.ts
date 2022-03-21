import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentesComponent } from '../componentes/componentes.component';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule

    
  ],

@NgModule ({
  imports: [
    MatSliderModule,
  ]
})
class AppModule {}
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

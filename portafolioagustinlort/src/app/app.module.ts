import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarradetareasComponent } from './barradetareas/barradetareas.component';
import { FotodeperfilComponent } from './fotodeperfil/fotodeperfil.component';

@NgModule({
  declarations: [
    AppComponent,
    BarradetareasComponent,
    FotodeperfilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentesComponent } from './components/componentes/componentes.component';
import { FotodeperfilComponent } from './fotodeperfil/fotodeperfil.component';
import { FotodeportadaComponent } from './fotodeportada/fotodeportada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    FotodeperfilComponent,
    FotodeportadaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

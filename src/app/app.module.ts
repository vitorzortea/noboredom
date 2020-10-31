import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapaComponent } from './capa/capa.component';
import { AtividadeComponent } from './atividade/atividade.component';

@NgModule({
  declarations: [
    AppComponent,
    CapaComponent,
    AtividadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpUtil } from './../service/httpUtil';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GraficoLotesComponent } from './grafico-lotes/grafico-lotes.component';
import { GraficoDinamicaComponent } from './grafico-dinamica/grafico-dinamica.component';
import { GraficoDesempenhoComponent } from './grafico-desempenho/grafico-desempenho.component';
import { GraficoDesempenhoService } from './grafico-desempenho/grafico-desempenho.service';
import { GraficoDinamicaService } from './grafico-dinamica/grafico-dinamica.service';
import { GraficoLotesService } from './grafico-lotes/grafico-lotes.service';

@NgModule({
  declarations: [
    AppComponent,
    GraficoLotesComponent,
    GraficoDinamicaComponent,
    GraficoDesempenhoComponent,
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    MaterialModule, 
    FormsModule, 
    HttpClientModule,
    TextMaskModule
  ],
  providers: [HttpUtil, GraficoDesempenhoService, GraficoDinamicaService, GraficoLotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

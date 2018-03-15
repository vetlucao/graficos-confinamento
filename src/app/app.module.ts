import { HttpUtil } from './../service/httpUtil';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChartService } from './service/chart-service';
import { GraficoLotesComponent } from './grafico-lotes/grafico-lotes.component';
import { GraficoDinamicaComponent } from './grafico-dinamica/grafico-dinamica.component';
import { GraficoDesempenhoComponent } from './grafico-desempenho/grafico-desempenho.component';

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
  providers: [HttpUtil, ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash'
import { ChartService } from '../service/chart-service';
import * as Plotly from 'plotly.js';

@Component({
  selector: 'app-grafico-lotes',
  templateUrl: './grafico-lotes.component.html',
  styleUrls: ['./grafico-lotes.component.css']
})
export class GraficoLotesComponent implements OnInit {

    @ViewChild('chartLotes') el: ElementRef;
  
    constructor(private chartService: ChartService) { }
  
    ngOnInit() {
      this.basicChart()
    }
  
  
    basicChart() {
      const element = this.el.nativeElement;
      
      var possuiMeta = true;
      var unidade = "kg"
      var y1 = [446.9, 505.5, 496.2, 569, 550.4, 491.7, 470.4, 481.6, 407.9, 464.4];
      var x1 = ["lote 1", "lote 2", "lote 3", "lote 4", "lote 5", "lote 6", "lote 7", "lote 8", "lote 9", "lote 10"];
      var e1 = [62, 46, 49, 38, 52, 55, 47, 58, 37, 35];
      var l1 = y1.map((y1i, i) => ` Mediana:<br> ${y1i} ${unidade} ± ${e1[i]} ${unidade} `);
      
      if(possuiMeta){
        var y2 = ["500", "500", "500", "600", "600", "500", "500", "450", "450", "450"];
        var l2 = y2.map((y2i, i) => ` Meta: ${y2i} ${unidade} `);
      }

     const data:any = [{
        y: y1,
        x: x1,
        error_y: {
          type: "data",
          array: e1,
          width:0,
          thickness:2.5
        },
        uid: "654dee",
        mode: "markers",
        marker:{
          size:8
        },
        type: "scatter",
        text: l1,
        hoverinfo: "text"
      }
    ];

    if(possuiMeta){
      data.push( {
        mode: "markers",
        y: y2,
        x: x1,
        marker:{
          size:9,
          symbol: "x",
          opacity:1,
          color: "red",
          line:{
            color: "white",
            width: 1
          }
        },
        text: l2,
        hoverinfo: "text"
      });
    }
   

      const layout:any = {
        height: 150,
        width: "100%",
        margin:{
          l: 0,
          r: 0,
          t: 0,
          b: 0,
          pad: 0 
        },
        autosize: false,
        colorway: {
          0:	"#1f77b4",
          1:	"#FF0000"
        }, 
        showlegend: false,
        xaxis:{
          tickangle	: 45,
          tickfont:{
            family: "Arial"
          },
          zeroline: false,
          domain:[
            "0.04",
            "1"
          ]
        },
        yaxis:{
          zeroline: false,
          domain:[
            "0.24",
            "1"
          ]
        }
      };
  
      Plotly.plot( element, data, layout, {displayModeBar: false});
    }
  }

  window.onresize = function() { Plotly.Plots.resize("chartLotes") };
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash'
import { ChartService } from '../service/chart-service';
import * as Plotly from 'plotly.js';

@Component({
  selector: 'app-grafico-dinamica',
  templateUrl: './grafico-dinamica.component.html',
  styleUrls: ['./grafico-dinamica.component.css'],
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class GraficoDinamicaComponent implements OnInit {

  @ViewChild('chartDinamica') graficoDinamica: ElementRef;
  
  data:any;
  layout:any;

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.geraGrafico()
  }

  geraGrafico() {
    var y1 = [1.9, 2.2, 2.1, 2.2];
    var x1 = ["23/Jul", "06/Aug", "20/Aug", "03/Set"];
    var l1 = y1.map((y1i, i) => ` ${y1i}kg<br> ${x1[i]} `);
    
    var y2 = [2.5, 2.6, 2.5, 2.6];
    var l2 = y2.map((y2i, i) => ` ${y2i}kg<br> ${x1[i]} `);

    var y3 = [2.2, 2.4, 2.3, 2.4];
    var l3 = y3.map((y3i, i) => ` ${y3i}kg<br> ${x1[i]} `);

    var y4 = [40, 42, 41, 42];
    var l4 = y4.map((y4i, i) => ` ${y4i}kg/d<br> ${x1[i]} `);
    
    var y5 = [44, 46, 45, 46];
    var l5 = y5.map((y5i, i) => ` ${y5i}kg/d<br> ${x1[i]} `);

    var y6 = [42, 44, 43, 44];
    var l6 = y6.map((y6i, i) => ` ${y6i}kg/d<br> ${x1[i]} `);
    
    var y7 = [38000, 42000, 46000, 50000];
    var l7 = y7.map((y7i, i) => ` ${y7i}kg<br> ${x1[i]} `);
    
    var y8 = [0, 2500, 5000, 7500];
    var l8 = y8.map((y8i, i) => ` ${y8i}kg<br> ${x1[i]} `);

    this.data = [{
      y: y1,
      x: x1,
      yaxis	: "y4",
      mode: "lines",
      line:{
        color: "#b3e6b3",
        width:0
      },
      type: "scatter",
      text: l1,
      hoverinfo: "text"
    },
    {
      y: y2,
      x: x1,
      yaxis	: "y4",
      mode: "lines",
      fillcolor	: "rgba(55, 170, 105, 0.2)",
      line:{
        color: "#b3e6b3",
        width:0
      },
      fill: "tonexty",
      type: "scatter",
      text: l2,
      hoverinfo: "text"
    },
    {
      y: y3,
      x: x1,
      yaxis	: "y4",
      mode: "lines",
      line:{
        color: "#2E8B57",
        width:3
      },
      type: "scatter",
      text: l3,
      hoverinfo: "text"
    },
    {
      y: y4,
      x: x1,
      yaxis	: "y3",
      mode: "lines",
      line:{
        color: "#b3d1ff",
        width:0
      },
      type: "scatter",
      text: l4,
      hoverinfo: "text"
    },
    {
      y: y5,
      x: ["23/Jul", "06/Aug", "20/Aug", "03/Set"],
      yaxis	: "y3",
      mode: "lines",
      fillcolor	: "rgba(0, 115, 235, 0.2)",
      line:{
        color: "#b3d1ff",
        width:0
      },
      fill: "tonexty",
      type: "scatter",
      text: l5,
      hoverinfo: "text"
    },
    {
      y: y6,
      x: ["23/Jul", "06/Aug", "20/Aug", "03/Set"],
      yaxis	: "y3",
      mode: "lines",
      line:{
        color: "#4682B4",
        width:3
      },
      type: "scatter",
      text: l6,
      hoverinfo: "text"
    },
    {
      y: y7,
      x: ["23/Jul", "06/Aug", "20/Aug", "03/Set"],
      yaxis	: "y2",
      mode: "lines",
      line:{
        color: "#2E8B57",
        width:3
      },
      type: "scatter",
      text: l7,
      hoverinfo: "text"
    },
    {
      y: y8,
      x: x1,
      yaxis	: "y",
      mode: "lines",
      line:{
        color: "#4682B4",
        width:3
      },
      type: "scatter",
      text: l8,
      hoverinfo: "text"
    }
  ];
  

    this.layout = {
      height: 350,
      margin:{
        l: 55,
        r: 20,
        t: 5,
        b: 25,
        pad: 0 
      },
      autosize: false,
      colorway: {
        0:	"#1f77b4",
        1:	"#FF0000"
      }, 
      showlegend: false,
      hovermode:'closest',
      xaxis:{
        showticklabels: true,
        tickfont:{
          family: "Arial"
        },
        zeroline: false,
        domain:[
          "0",
          "1"
        ]
      },
      yaxis4:{
        zeroline: false,
        domain:[
          "0.795",
          "1"
        ],
        title: "<b>PV, kg</b>",
        titlefont:{
          family	:	"\"Open Sans\", verdana, arial, sans-serif",
          size	:	11
        },
        tickfont:{
          size: 11
        }
      },
      yaxis3:{
        zeroline: false,
        domain:[
          "0.53",
          "0.735"
        ],
        title: "<b>GPD, kg/d</b>",
        titlefont:{
          family	:	"\"Open Sans\", verdana, arial, sans-serif",
          size	:	11
        },
        tickfont:{
          size: 11
        }
      },
      yaxis2:{
        zeroline: false,
        domain:[
          "0.265",
          "0.47"
        ],
        title: "<b>PV TOT, kg</b>",
        titlefont:{
          family	:	"\"Open Sans\", verdana, arial, sans-serif",
          size	:	11
        },
        tickfont:{
          size: 11
        }
      },
      yaxis:{
        zeroline: false,
        domain:[
          "0",
          "0.205"
        ],
        title: "<b>GP TOT, kg</b>",
        titlefont:{
          family	:	"\"Open Sans\", verdana, arial, sans-serif",
          size	:	11
        },
        tickfont:{
          size: 11
        }
      }
    };

    var d3 = Plotly.d3;
    var gd3 = d3.select(this.graficoDinamica.nativeElement);
    var gd = gd3.node();

    Plotly.plot(gd, this.data, this.layout, { displayModeBar: false });

    var largura = this.graficoDinamica.nativeElement.offsetWidth;
      var update = {
        width: largura
      };
      Plotly.relayout(gd, update);
  }

  onResize(){
    var d3 = Plotly.d3;
    var gd3 = d3.select(this.graficoDinamica.nativeElement);
    var gd = gd3.node();

    Plotly.plot(gd, this.data, this.layout, { displayModeBar: false });

    var largura = this.graficoDinamica.nativeElement.offsetWidth;
      var update = {
        width: largura
      };
      Plotly.relayout(gd, update);
  }
}
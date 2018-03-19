import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash'
import { ChartService } from '../service/chart-service';
import * as Plotly from 'plotly.js';

@Component({
  selector: 'app-grafico-desempenho',
  templateUrl: './grafico-desempenho.component.html',
  styleUrls: ['./grafico-desempenho.component.css'],
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class GraficoDesempenhoComponent implements OnInit {

  @ViewChild('chartDesempenho') graficoDesempenho: ElementRef;
  
  constructor(private chartService: ChartService) { }

  data:any;
  layout:any;

  ngOnInit() {
    this.geraGrafico()
  }

  geraGrafico() {
    var y1 = [462.5,468,474,468.5,448.5,470,466,478,464.5,474.5,472.5,479,487.5,471.5,322.5,464,481.5,487,492,497,483.5,473.5,490.5,474.5,486.5,474,507,478.5,480,487,501.5,471.5,500.5,519.5,499.5,503,505.5,493,505.5,516.5,525,522.5,520.5,504,500,501.5,506,502.5,510.5,513.5,517,521.5,511.5,502,506,514.5,507.5,213.5,514,504.5,514.5,523.5,514.5,518,523,514.5,511,521,522.5,527,510,525.5,529.5,530,524.5,535,532.5,518,509.5,503.5,502.5,514.5,495,497,842.5,734.5,524.5,535,394,519.5,519.5,527,528.5,534,574.5,536.5,525.5,525.5,550,538,394.5,545.5,536,543,554.5,111,565,101.5,541,557,540,546.5,568,542.5,554,550.5,563.5,555.5,570,546,565,564,562.5,568,568.5,559,567,565,566.5,553.5,563.5,561,565.5,557,570,573,566,568.5,570,602,581,582,589,569.5,592,605.5,598,593.5,605,587,596,591.5,590,606.5,608.5,587,588,578,596,600.5,222,220.5,596.5,569,586.5,270,601.5,620.5,605,600,609,597.5,605.5,602,610,600.5,611,589.5,603.5,606,607.5,614.5,590,591.5,595.5,585,575.5,554.5,589.5,600.5,576.5,572,523,548.5,381.5,548,598,592,587];
    var x1 = ["12/12/2017","12/12/2017","12/12/2017","12/12/2017","13/12/2017","13/12/2017","13/12/2017","13/12/2017","13/12/2017","13/12/2017","14/12/2017","14/12/2017","14/12/2017","21/12/2017","21/12/2017","21/12/2017","22/12/2017","22/12/2017","22/12/2017","22/12/2017","23/12/2017","23/12/2017","23/12/2017","24/12/2017","24/12/2017","24/12/2017","24/12/2017","25/12/2017","25/12/2017","25/12/2017","25/12/2017","26/12/2017","03/01/2018","03/01/2018","04/01/2018","04/01/2018","04/01/2018","05/01/2018","05/01/2018","10/01/2018","10/01/2018","14/01/2018","16/01/2018","16/01/2018","17/01/2018","17/01/2018","18/01/2018","18/01/2018","18/01/2018","18/01/2018","19/01/2018","19/01/2018","19/01/2018","20/01/2018","20/01/2018","20/01/2018","20/01/2018","21/01/2018","21/01/2018","21/01/2018","21/01/2018","21/01/2018","22/01/2018","22/01/2018","22/01/2018","23/01/2018","23/01/2018","23/01/2018","23/01/2018","23/01/2018","24/01/2018","24/01/2018","24/01/2018","24/01/2018","24/01/2018","24/01/2018","24/01/2018","24/01/2018","25/01/2018","25/01/2018","25/01/2018","25/01/2018","26/01/2018","26/01/2018","26/01/2018","26/01/2018","28/01/2018","29/01/2018","29/01/2018","30/01/2018","31/01/2018","31/01/2018","31/01/2018","31/01/2018","01/02/2018","02/02/2018","03/02/2018","03/02/2018","03/02/2018","03/02/2018","03/02/2018","03/02/2018","04/02/2018","04/02/2018","04/02/2018","05/02/2018","05/02/2018","05/02/2018","05/02/2018","06/02/2018","06/02/2018","06/02/2018","07/02/2018","07/02/2018","08/02/2018","08/02/2018","08/02/2018","09/02/2018","09/02/2018","12/02/2018","12/02/2018","13/02/2018","13/02/2018","15/02/2018","15/02/2018","16/02/2018","16/02/2018","16/02/2018","17/02/2018","18/02/2018","18/02/2018","18/02/2018","19/02/2018","20/02/2018","20/02/2018","20/02/2018","21/02/2018","21/02/2018","22/02/2018","22/02/2018","22/02/2018","22/02/2018","22/02/2018","23/02/2018","23/02/2018","23/02/2018","24/02/2018","24/02/2018","24/02/2018","25/02/2018","25/02/2018","25/02/2018","25/02/2018","25/02/2018","25/02/2018","26/02/2018","26/02/2018","26/02/2018","26/02/2018","27/02/2018","01/03/2018","01/03/2018","01/03/2018","02/03/2018","02/03/2018","03/03/2018","03/03/2018","03/03/2018","04/03/2018","04/03/2018","04/03/2018","05/03/2018","05/03/2018","06/03/2018","06/03/2018","06/03/2018","07/03/2018","07/03/2018","07/03/2018","07/03/2018","08/03/2018","08/03/2018","08/03/2018","09/03/2018","09/03/2018","09/03/2018","09/03/2018","10/03/2018","10/03/2018","11/03/2018","11/03/2018","12/03/2018","12/03/2018","12/03/2018","12/03/2018","12/03/2018","13/03/2018","13/03/2018","13/03/2018"];
    var l1 = y1.map((y1i, i) => ` ${y1i}kg<br> ${x1[i]} `);
    
    var y2 = [475.26,475.26,475.26,475.26,476.97,476.97,476.97,476.97,476.97,476.97,478.67,478.67,478.67,480.37,480.37,480.37,482.07,482.07,482.07,482.07,483.78,483.78,483.78,485.48,485.48,485.48,485.48,487.18,487.18,487.18,487.18,488.88,490.59,490.59,492.29,492.29,492.29,493.99,493.99,495.69,495.69,497.40,499.10,499.10,500.80,500.80,502.50,502.50,502.50,502.50,504.21,504.21,504.21,505.91,505.91,505.91,505.91,507.61,507.61,507.61,507.61,507.61,509.31,509.31,509.31,511.02,511.02,511.02,511.02,511.02,512.72,512.72,512.72,512.72,512.72,512.72,512.72,512.72,514.42,514.42,514.42,514.42,516.12,516.12,516.12,516.12,517.82,519.53,519.53,521.23,522.93,522.93,522.93,522.93,524.63,526.34,528.04,528.04,528.04,528.04,528.04,528.04,529.74,529.74,529.74,531.44,531.44,531.44,531.44,533.15,533.15,533.15,534.85,534.85,536.55,536.55,536.55,538.25,538.25,539.96,539.96,541.66,541.66,543.36,543.36,545.06,545.06,545.06,546.77,548.47,548.47,548.47,550.17,551.87,551.87,551.87,553.58,553.58,555.28,555.28,555.28,555.28,555.28,556.98,556.98,556.98,558.68,558.68,558.68,560.39,560.39,560.39,560.39,560.39,560.39,562.09,562.09,562.09,562.09,563.79,565.49,565.49,565.49,567.20,567.20,568.90,568.90,568.90,570.60,570.60,570.60,572.30,572.30,574.01,574.01,574.01,575.71,575.71,575.71,575.71,577.41,577.41,577.41,579.11,579.11,579.11,579.11,580.82,580.82,582.52,582.52,584.22,584.22,584.22,584.22,584.22,585.92,585.92,585.92,475.26];
    var x2 = ["12/12/2017","12/12/2017","12/12/2017","12/12/2017","13/12/2017","13/12/2017","13/12/2017","13/12/2017","13/12/2017","13/12/2017","14/12/2017","14/12/2017","14/12/2017","21/12/2017","21/12/2017","21/12/2017","22/12/2017","22/12/2017","22/12/2017","22/12/2017","23/12/2017","23/12/2017","23/12/2017","24/12/2017","24/12/2017","24/12/2017","24/12/2017","25/12/2017","25/12/2017","25/12/2017","25/12/2017","26/12/2017","03/01/2018","03/01/2018","04/01/2018","04/01/2018","04/01/2018","05/01/2018","05/01/2018","10/01/2018","10/01/2018","14/01/2018","16/01/2018","16/01/2018","17/01/2018","17/01/2018","18/01/2018","18/01/2018","18/01/2018","18/01/2018","19/01/2018","19/01/2018","19/01/2018","20/01/2018","20/01/2018","20/01/2018","20/01/2018","21/01/2018","21/01/2018","21/01/2018","21/01/2018","21/01/2018","22/01/2018","22/01/2018","22/01/2018","23/01/2018","23/01/2018","23/01/2018","23/01/2018","23/01/2018","24/01/2018","24/01/2018","24/01/2018","24/01/2018","24/01/2018","24/01/2018","24/01/2018","24/01/2018","25/01/2018","25/01/2018","25/01/2018","25/01/2018","26/01/2018","26/01/2018","26/01/2018","26/01/2018","28/01/2018","29/01/2018","29/01/2018","30/01/2018","31/01/2018","31/01/2018","31/01/2018","31/01/2018","01/02/2018","02/02/2018","03/02/2018","03/02/2018","03/02/2018","03/02/2018","03/02/2018","03/02/2018","04/02/2018","04/02/2018","04/02/2018","05/02/2018","05/02/2018","05/02/2018","05/02/2018","06/02/2018","06/02/2018","06/02/2018","07/02/2018","07/02/2018","08/02/2018","08/02/2018","08/02/2018","09/02/2018","09/02/2018","12/02/2018","12/02/2018","13/02/2018","13/02/2018","15/02/2018","15/02/2018","16/02/2018","16/02/2018","16/02/2018","17/02/2018","18/02/2018","18/02/2018","18/02/2018","19/02/2018","20/02/2018","20/02/2018","20/02/2018","21/02/2018","21/02/2018","22/02/2018","22/02/2018","22/02/2018","22/02/2018","22/02/2018","23/02/2018","23/02/2018","23/02/2018","24/02/2018","24/02/2018","24/02/2018","25/02/2018","25/02/2018","25/02/2018","25/02/2018","25/02/2018","25/02/2018","26/02/2018","26/02/2018","26/02/2018","26/02/2018","27/02/2018","01/03/2018","01/03/2018","01/03/2018","02/03/2018","02/03/2018","03/03/2018","03/03/2018","03/03/2018","04/03/2018","04/03/2018","04/03/2018","05/03/2018","05/03/2018","06/03/2018","06/03/2018","06/03/2018","07/03/2018","07/03/2018","07/03/2018","07/03/2018","08/03/2018","08/03/2018","08/03/2018","09/03/2018","09/03/2018","09/03/2018","09/03/2018","10/03/2018","10/03/2018","11/03/2018","11/03/2018","12/03/2018","12/03/2018","12/03/2018","12/03/2018","12/03/2018","13/03/2018","13/03/2018","13/03/2018"];
    var l2 = y2.map((y2i, i) => ` ${y2i}kg<br> ${x2[i]} `);

    var y3 = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
    var x3 = ["12/12/2017","13/12/2017","14/12/2017","21/12/2017","22/12/2017","23/12/2017","24/12/2017","25/12/2017","26/12/2017","03/01/2018","04/01/2018","05/01/2018","10/01/2018","14/01/2018","16/01/2018","17/01/2018","18/01/2018","19/01/2018","20/01/2018","21/01/2018","22/01/2018","23/01/2018","24/01/2018","25/01/2018","26/01/2018","28/01/2018","29/01/2018","30/01/2018","31/01/2018","01/02/2018","02/02/2018","03/02/2018","04/02/2018","05/02/2018","06/02/2018","07/02/2018","08/02/2018","09/02/2018","12/02/2018","13/02/2018","15/02/2018","16/02/2018","17/02/2018","18/02/2018","19/02/2018","20/02/2018","21/02/2018","22/02/2018","23/02/2018","24/02/2018","25/02/2018","26/02/2018","27/02/2018","01/03/2018","02/03/2018","03/03/2018","04/03/2018","05/03/2018","06/03/2018","07/03/2018","08/03/2018","09/03/2018","10/03/2018","11/03/2018","12/03/2018","13/03/2018"];
    var l3 = y3.map((y3i, i) => ` ${y3i}kg<br> ${x3[i]} `);

    this.data = [{
      y: y1,
      x: x1,
      yaxis	: "y",
      mode: "markers",
      line:{
        color: "#ff7f0e",
      },
      marker: {
        opacity	: 0.7
      },
      type: "scatter",
      text: l1,
      hoverinfo: "text",
      name: "Mediana"
    },
    {
      y: y2,
      x: x2,
      yaxis	: "y",
      mode: "lines",
      line:{
        color: "#2E8B57",
        width: 3
      },
      marker: {
        opacity	: 0.8
      },
      type: "scatter",
      text: l2,
      hoverinfo: "text"
    },
    {
      y: y3,
      x: x3,
      yaxis	: "y2",
      mode: "lines",
      line:{
        color: "#4682B4",
        width:3
      },
      type: "scatter",
      text: l3,
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
        nticks: 6,
        domain:[
          "0",
          "1"
        ]
      },
      yaxis2:{
        zeroline: false,
        domain:[
          "0.8",
          "1"
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
      yaxis:{
        zeroline: false,
        domain:[
          "0",
          "0.75"
        ],
        title: "<b>Peso Vivo, kg</b>",
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
    var gd3 = d3.select(this.graficoDesempenho.nativeElement);
    var gd = gd3.node();

    Plotly.plot(gd, this.data, this.layout, { displayModeBar: false });

    var largura = this.graficoDesempenho.nativeElement.offsetWidth;
      var update = {
        width: largura
      };
      Plotly.relayout(gd, update);
  }

  onResize(){
    var d3 = Plotly.d3;
    var gd3 = d3.select(this.graficoDesempenho.nativeElement);
    var gd = gd3.node();

    Plotly.plot(gd, this.data, this.layout, { displayModeBar: false });

    var largura = this.graficoDesempenho.nativeElement.offsetWidth;
      var update = {
        width: largura
      };
      Plotly.relayout(gd, update);
  }

}
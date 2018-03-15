import { Injectable } from '@angular/core';

@Injectable()
export class ChartService {

  constructor() { }

  getDadosPlotly() {
    return {y: ["446.9", "505.5", "496.2", "569", "550.4", "491.7", "470.4", "481.6", "407.9", "464.4"],
      x: ["lote 1", "lote 2", "lote 3", "lote 4", "lote 5", "lote 6", "lote 7", "lote 8", "lote 9", "lote 10"]
    };
  }


  // Used for realtime data updates
  updateRanking(key, newData) {
    
  }

}
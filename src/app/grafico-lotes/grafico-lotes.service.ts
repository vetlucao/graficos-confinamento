import { Injectable } from '@angular/core';

@Injectable()
export class GraficoLotesService {

  constructor() { }

  getPossuiMeta(){
    return true;
  }
  
  getUnidade(){
    return 'kg';
  }
  
  getY1(){
    return [446.9, 505.5, 496.2, 569, 550.4, 491.7, 470.4, 481.6, 407.9, 464.4];
  }

  getY2(){
    return ["500", "500", "500", "600", "600", "500", "500", "450", "450", "450"];
  }
  
  getE1(){
    return [62, 46, 49, 38, 52, 55, 47, 58, 37, 35];
  }

  getX1(){
    return ["lote 1", "lote 2", "lote 3", "lote 4", "lote 5", "lote 6", "lote 7", "lote 8", "lote 9", "lote 10"];
  }
  
}

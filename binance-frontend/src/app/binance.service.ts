import {Injectable} from '@angular/core';
import {Market} from "./model/market";
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class BinanceService {
  private socket;
  private readonly webSocketUrl = "ws://localhost:5555";
  private _market: Market = new Market();

  constructor() {
  }

  connect(){
    this.socket = io(this.webSocketUrl);
    this.socket.on("ticker", trade => {
      this._market.trades.push(trade);
      if (this._market.trades.length>25){
        this._market.trades = this._market.trades.slice(this._market.trades.length-25);
      }

      let data = this._market.trades.map(t => t.price);
      let labels = this._market.trades.map(t => t.timestamp.toString());
      this._market.tradesChartData[0].data = data;
      this._market.tradesChartLabels = labels;
    })
  }

  get market(): Market {
    return this._market;
  }
}

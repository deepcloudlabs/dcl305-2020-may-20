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
      trade.datetime = new Date(trade.timestamp).toLocaleString('tr-TR');
      this._market.trades.push(trade);
      if (this._market.trades.length>15){
        this._market.trades = this._market.trades.slice(this._market.trades.length-15);
      }

      let data = this._market.trades.map(t => t.price);
      let labels = this._market.trades.map(t => new Date(t.timestamp).toLocaleString('tr-TR', { hour:'numeric', minute:'numeric', second:'numeric', hour12:false }));
      this._market.tradesChartData[0].data = data;
      this._market.tradesChartLabels = labels;
    })
  }

  get market(): Market {
    return this._market;
  }
}

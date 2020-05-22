import {Trade} from "./trade";

export class Market {
  trades : Array<Trade> = [];
  tradesChartData : Array<any> = [{
    data: [],
    label: "BTCUSDT"
  }];
  tradesChartLabels : Array<string> = [];
}

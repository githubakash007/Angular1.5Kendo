import { ISeriesData } from './ISeriesData';
import { LineChartComponentController } from './lineChart.controller';

export class LineChartComponent implements ng.IComponentOptions {

  public controller: ng.Injectable<ng.IControllerConstructor>;
  public controllerAs: string;
  public templateUrl: string;
  public bindings: any;
  
  constructor() {
    this.templateUrl = "/app/lineChart/lineChart.component.html";
    this.bindings = {
      text: '@',
      value: '@'

    };
    this.controller = LineChartComponentController;
    this.controllerAs = "model";

  }
}
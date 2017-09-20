import { LineChartComponent } from './lineChart/lineChart.component';
import * as angular from 'angular';
import {DataService} from './common/services/dataService';

//namespace app.common.services {
     angular.module("commonServiceModule", ["ngResource"]);
     angular.module("commonServiceModule").service("dataService",["$resource", DataService]);
    angular.module("KendoChart", ["kendo.directives","commonServiceModule"]).component("lineChart",new LineChartComponent());
//}

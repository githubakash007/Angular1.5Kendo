import { ISeriesData } from './ISeriesData';
import { SERIESDATA } from './seriesData';
import { IOnChangesObject } from "angular";
import {DataService} from './../common/services/dataService';
//import myService = app.common.services.DataService;
// import {toaster}  from "ngtoaster";

export class LineChartComponentController implements ng.IComponentController {

    static $inject = ['dataService'];
    constructor(private _service:DataService) {
        console.log(`service - ${this._service}`);
     }

    text: string;
    value: string;
    //public seriesData: ISeriesData[];
    valueAxis = { "min": 10, "max": 100, "majorUnit": 10 };
    min: number = 20;
    max: number = 80;
    rebindObj: any = { "rebind": false };

    message: string;
    lineChartConfig: any;

    inputData: ISeriesData;
    inputUpdateData: any = { "obj": {}, index: 0 };
    seriesData:ng.resource.IResourceArray<ng.resource.IResource<ISeriesData>>;
     

    public $onInit() {
       // this.seriesData = SERIESDATA;
       this.seriesData = this._service.getSeriesData();

             
        
        //this.min = Math.min.apply(null, this.seriesData.map(obj => obj.temperature));
       // this.max = Math.max.apply(null, this.seriesData.map(obj => obj.temperature));




    }

    public $onChange(onChangesObj: IOnChangesObject): void {
        //console.log(onChangesObj);
    }



    updateMessage(): void {

        // this.message = `The min= ${this.min} and the max= ${this.max}  and majorUnit = ${this.valueAxis.majorUnit}`;
        //this.valueAxis.min = this.min;
        //this.valueAxis.max = this.max;
        this.rebindObj.min = this.min;
        this.rebindObj.max = this.max;
        //console.log(this.test);
        //this.min1 = Number(this.min);
        //this.max1 = Number(this.max);
        //this.message = `The min= ${this.valueAxis.min} and the max= ${this.valueAxis.max}  and majorUnit = ${this.valueAxis.majorUnit}`;
    }

    Update(e: any): void {
        console.log(e);
        if (e !== null && e !== undefined) {
            this.inputUpdateData.index = this.seriesData.indexOf(e);
            Object.assign(this.inputUpdateData.obj, e);

        }
        else {


            //The below line will work too but user can see live updates in the table as he type in the update pop-up.
            // therefore using Object.assign to do deep cloning before binding
            // this.seriesData[this.inputUpdateData.index] =  this.inputUpdateData.obj;
            Object.assign(this.seriesData[this.inputUpdateData.index], this.inputUpdateData.obj);

        }

    }


    Delete(e: any): void {

        var newdata = this.seriesData.filter(y => y !== e);
        this.seriesData = newdata;
    }

    Add(): void {
        console.log(`I am in Add  ${this.inputData.temperature} ${this.inputData.month}  length ${this.seriesData.length}`);
        this.seriesData.unshift(this.inputData);
        this.rebindObj.rebind = !this.rebindObj.rebind;
        console.log(this.rebindObj.rebind);


    }

    renderEvent(e: any) {

        console.log("in render");

        // console.log(e);
        // console.log(e.sender.options.series[0].data[0].temperature);
        // console.log(e.sender.options.series.data);
        // let chartInstance = e.sender;
        // let valueAxis = e.sender.options.valueAxis;
        // console.log(valueAxis);
        // console.log(this.lineChartConfig);

    }
}
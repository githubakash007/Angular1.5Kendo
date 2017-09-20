import ISeriesData = app.domain.ISeriesData;
import * as angular from 'angular';
//namespace app.common.services {
   export interface IDataService {

        getSeriesData(): ng.resource.IResourceClass<ng.resource.IResource<ISeriesData>>

    }


    export interface ISeriesDataResource extends ng.resource.IResourceClass<ng.resource.IResource<ISeriesData>> //ng.resource.IResourceArray<ng.resource.IResource<ISeriesData>>
    {
                

    }

    export interface ISeriesDataResource1 extends ng.resource.IResource<ISeriesData>{
                

    }


    export class DataService implements IDataService {


        constructor(private $resource: ng.resource.IResourceService) {
               //  console.log(`resource service -  ${this.$resource}`);
        }
        url: string = "app/data/seriesData.json";

        getSeriesData():ng.resource.IResourceClass<ng.resource.IResource<ISeriesData>>{
            // let result: ISeriesData[] = [];
            return  this.$resource(this.url);

            // console.log('gggggggggggg');
            // console.log(result);
           // return result;


        }

    }
//}


//angular.module("commonServiceModule").service("dataService", DataService);
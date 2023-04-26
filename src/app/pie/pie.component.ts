import { Component } from '@angular/core';
import { ApiFetchService } from '../api-fetch.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {
  public chart : any;
  
  constructor(private apiService : ApiFetchService){}
  data: any;
  newData: any[]=[]; 
  names: string[]=[];
  totTime : number[]=[];
  ngOnInit(){
    this.apiService.getData().subscribe( res => {
      this.data = res;
      // this.newData = [];
      // console.log(res);
      this.data.forEach((element:any) => {
        const curr = new Date(element.StarTimeUtc);
        const next = new Date(element.EndTimeUtc);
        const obj = {
          name : element.EmployeeName,
          totalTime: (next.valueOf() - curr.valueOf())
        };
        // console.log(obj);

        // if(this.names.find(element.EmployeeName) == undefined){
          if(!this.names.includes(obj.name))
          this.names.push(element.EmployeeName);
        // }

        const ind = this.names.indexOf(obj.name);
        this.totTime
        
        // console.log(this.totTime.at(ind));
        if(this.totTime.at(ind) == undefined){
          this.totTime[ind] = obj.totalTime;
        }
        else this.totTime[ind] = this.totTime[ind] + obj.totalTime;
        // console.log(typeof(obj.totalTime));
        // console.log(this.totTime);
        

        this.newData.push(obj);
        return obj;
        
      });
    });
    // console.log(this.newData);
    // console.log(this.names);
    // console.log(this.totTime);
    this.createChart();
  }
  
  createChart(){
    // const newArr = this.totTime.forEach(element=>{
    //   return element;
    // })
    // console.log(this.totTime);
    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.names,
	       datasets: [{
    label: 'My First Dataset',
    data: this.totTime,
    backgroundColor: [
      'red'
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }
}

import { Component, OnInit } from '@angular/core';
import { InformeService } from  '../informe.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.sass']
})
export class InformeComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [];

 public lineChartLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];


  constructor(public json:InformeService) {
    this.json.getJson('https://run.mocky.io/v3/15517ca5-7e07-4ebc-bf63-5b033ec4e16a').subscribe((res:any)=>{
      console.log(res.sales);
let ventas= res.sales;
      for (let i = 0; i < ventas.length; i++)
      {
        this.lineChartLabels.push(ventas[i].car_make);
        this.lineChartData.push(ventas[i].quantity);
      }

      console.log(this.lineChartData);
  });
  }

  ngOnInit(): void {
  }

}

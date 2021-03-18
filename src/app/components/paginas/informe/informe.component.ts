import { Component, OnInit } from '@angular/core';
import { InformeService } from  '../informe.service';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.sass']
})
export class InformeComponent implements OnInit {

  constructor(public json:InformeService) {
    this.json.getJson('https://run.mocky.io/v3/15517ca5-7e07-4ebc-bf63-5b033ec4e16a').subscribe((res:any)=>{
      console.log(res.sales);

  });
  }

  ngOnInit(): void {
  }

}

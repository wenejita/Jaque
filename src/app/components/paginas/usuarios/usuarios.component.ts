import {  Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UsuariosService } from  '../usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.sass']
})
export class UsuariosComponent implements AfterViewInit {
  public displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'gender','image'];
  public dataSource:any;



  constructor(public json:UsuariosService) {
    this.json.getJson('https://run.mocky.io/v3/d5ddf1ff-a0e2-4a7e-bbcc-e832bef6a503').subscribe((res:any)=>{

      this.dataSource = res.users;
  });
}
ngAfterViewInit() {


}

}

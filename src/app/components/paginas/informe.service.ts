import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformeService {

  constructor(public http: HttpClient) {}

/*Obtención de usuarios mediante servicio*/
  getJson (url:string){
        return this.http.get(url);
  }
}

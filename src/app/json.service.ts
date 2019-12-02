import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private hc:HttpClient) { }

  //method for getting data from data.json

  getData():Observable<any>
  {
   return this.hc.get<any>('../assets/data.json')
  }
}

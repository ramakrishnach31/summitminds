import { Component, OnInit, } from '@angular/core';
import { JsonService } from './json.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  prizes:object[]=[];

  constructor(private json:JsonService){}

  //method for read data from json service

  ngOnInit(){
    this.json.getData().subscribe(res=>{
      
      this.prizes=res
      
      
    },(err: HttpErrorResponse) => {
      console.log (err.message);
     })
}
}


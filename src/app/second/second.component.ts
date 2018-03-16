import { Component, OnInit,Input } from '@angular/core';
import{appService} from'../app.service';
import {ActivatedRoute,Params} from'@angular/router';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  providers: [appService] 
})
export class SecondComponent implements OnInit {

info={
  firstname:'',
  password:'',
};
private sub :any;
  constructor(private route: ActivatedRoute) { 
    
  }
  ngOnInit():void  {
   // this.info=this.service.getApp();
  
  this.sub = this.route.params.subscribe((params: Params) => {
   this.info.firstname = params['username'];
 //  var logname  =JSON.parse(sessionStorage.getItem("loginip"));
   
  });
}
}





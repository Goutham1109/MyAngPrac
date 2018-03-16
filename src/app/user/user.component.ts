import { Component, OnInit } from '@angular/core';
import { appService } from '../app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [appService] 
  
})
export class UserComponent implements OnInit {

  info:{
    username:'',
    email:'',
    password:'',
    gender:'',
  }[]=[];
public array:any=[]
  constructor(private service:appService) { }

  ngOnInit()  {
        this.array=JSON.parse(this.service.getApp());
        console.log(this.array.length);
  }
  
  //JSON.parse(sessionStorage.app_u)[0].username
}

// info:{
//   firstname:'',
//   email:'',
//   password:'',
// }[]=[];
import { Component, OnInit } from '@angular/core';
import{Http,Headers,Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { NgModule } from '@angular/core';
import { Router,RouterLink,ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import{FormControl,FormGroup,Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudaddComponent } from '../crudadd/crudadd.component';


@Component({
  selector: 'app-tryout',
  templateUrl: './tryout.component.html',
  styleUrls: ['./tryout.component.css']
})
export class TryoutComponent implements OnInit {


  ngOnInit() {
  }


  data={
    "empid":"",
    "empfname":"",
    "emplname":"",
    "empemail":""
  };

  
  constructor(private http:Http) { }

  obj:Object={}

  Submit()
  {
    let id =this.data.empid;
    let firstName=this.data.empfname;
    let lastName=this.data.emplname;
    let emaill=this.data.empemail;
  
    this.obj={
      "id":id,
      "first_name":firstName,
      "last_name":lastName,
      "email":emaill
    }


    this.http.post("http://localhost:5555/employees/",this.obj).subscribe((res:Response)=>{
      console.log(res);
  })
}
}

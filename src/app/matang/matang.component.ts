import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,NgModel,FormControl} from '@angular/forms';
import{MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-matang',
  templateUrl: './matang.component.html',
  styleUrls: ['./matang.component.css']
})
export class MatangComponent implements OnInit {
  matform: FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.matform = new FormGroup({
        'username': new FormControl(null, Validators.required),
        'pwd': new FormControl(null, [Validators.required, Validators.minLength(2)]),
        'date':new FormControl('',Validators.required),
      //'email': new FormControl(null, [Validators.required, Validators.email]),
      'emp':new FormControl('emp',Validators.required), 
      'gender':new FormControl('male',Validators.required),
    });
  }
  
  // getErrorMessage() {
  //   return this.matform.value.email.hasError('required') ? 'You must enter a value' :
  //       this.matform.value.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }
//emp='IT';

submit: boolean=false;
arrdata: any[]=[];

user={
  name:'',  
  password:'',
  dob:'',
  gender:'',
  work:'',
}

final(){
  this.submit=true;
  this.user.name=this.matform.value.username;
  this.user.password=this.matform.value.pwd;
  this.user.dob=this.matform.value.date;
  this.user.work=this.matform.value.emp;
  this.user.gender=this.matform.value.gender;
  this.arrdata.push(this.user);
  
  localStorage.setItem("memo",JSON.stringify(this.arrdata));
  this.matform.reset;
}

  myFilter=(d:Date):boolean=>{
    const day=d.getFullYear();
    console.log(day);
    return day> 1990&& day<2020; 
  }

  hide = true;
  

 
}

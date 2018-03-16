import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import{appService} from'../app.service';
import{emailpat} from'../validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [appService] 
  
})
export class FormComponent implements OnInit {
  signupform: FormGroup;

  public username;
  public email;
  public genders=['male', 'female'];
  public dob;

info:{
  firstname:'',
  email:'',
  password:'',
  dob:'',
  gender:'',
}[]=[];

  user = {
    username: '',
    password: '',
    email: '',
    dob:'',
    gender:''
  };

  arrdata: any[]=[];
  //arrdata2: any[];
  constructor(private router: Router,private service :appService) { }
  submitted: boolean = false;


  ngOnInit() {
    var recpass = sessionStorage.getItem("app");
    if (recpass != null) {
      this.arrdata = JSON.parse(recpass);
    }

    this.signupform = new FormGroup({
      'name': new FormGroup({
        'firstname': new FormControl(null, Validators.required),
        'password': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      }),
      'email': new FormControl(null, [Validators.required, Validators.email,emailpat]),
      'dob':new FormControl(),
      'gender':new FormControl('male'),
    });
  }

  routetoreg(){
    this.router.navigate(["/login"]);
  }

  list():any {
   this.info=JSON.parse(this.service.getApp());
    console.log(this.info);   
//let op=JSON.parse(this.info);
  this.router.navigate(["/user"]);
  }

  submit() {

    this.submitted = true;
    this.user.username = this.signupform.value.name.firstname;
    this.user.password = this.signupform.value.name.password;
    this.user.email = this.signupform.value.email;
    this.user.dob=this.signupform.value.dob;
    this.user.gender=this.signupform.value.gender;
    this.router.navigate(["/welcome"]);
    this.arrdata.push(this.user);
    console.log(this.user);
    sessionStorage.setItem("app", JSON.stringify(this.arrdata));
    alert("Registered successfully");
    
    //this.router.navigate(['/welcome',this.user.username,this.user.email]);
    this.signupform.reset();

  }
}




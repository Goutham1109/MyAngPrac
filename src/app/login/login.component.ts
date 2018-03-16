import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SecondComponent } from '../second/second.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  fname;
  details = {
    username: '',
    password: ''
  };

  exist: boolean = false;

  constructor(private route: Router) {

  }
  submit: boolean = false;

  ngOnInit() {
    this.loginform = new FormGroup({
      'name': new FormGroup({
        'firstname': new FormControl(null, Validators.required),
        'password': new FormControl(null, Validators.required),
      })
    });
  }

  returning() {
    this.route.navigate(["/register"]);
  }

  reroute() {
    this.route.navigate(["/remove"]);
  }


  submitted() {
    this.submit = true;
    this.details.password = this.loginform.value.name.password;
    this.details.username = this.loginform.value.name.firstname;

    var entereddata = JSON.parse(sessionStorage.app);
    for (let e of entereddata) {
      if (e.password == (this.details.password) && e.username == (this.details.username)) {

        this.route.navigate(["/second", this.details.username]);
        this.exist = true;
      }
    }
    if (this.exist == false) {
      this.loginform.reset();
      alert("try again login failed");
      //this.route.navigate(["/login"]);
      this.route.navigateByUrl('/login');
    }

  };



  //    sessionStorage.setItem("loginip", JSON.stringify(this.details.username));


}




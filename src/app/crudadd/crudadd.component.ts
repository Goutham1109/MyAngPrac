import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Router,RouterLink,ActivatedRoute } from '@angular/router';
import{Http,Headers,Response} from '@angular/http';
import {NgForm} from '@angular/forms';
import{FormControl,FormGroup,Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crudadd',
  templateUrl: './crudadd.component.html',
  styleUrls: ['./crudadd.component.css']
})
export class CrudaddComponent implements OnInit {

  data={
    "empid":"",
    "empfname":"",
    "emplname":"",
    "empemail":""
  };

  employees = [];
  
  constructor(private http:Http,private router:Router) {
    this.getData();

   }

  obj:Object={}

  getData() {
    this.employees = [];
    this.http.get("http://localhost:5555/employees").subscribe(
      (res: Response) => {
        this.employees = res.json();
        
    
        // for(let i=0;i<res.json().length;i++){
        //   this.employees.push( res.json()[i]);
        // }
    
      }
    )
  }



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
     this.employees = res.json();
  })
  this.getData();
  this.router.navigate(["crud"]);
  
  
}

// Submitt()
// {
//   let id =this.data.empid;
//   let firstName=this.data.empfname;
//   let lastName=this.data.emplname;
//   let emaill=this.data.empemail;

//   this.obj={
//     "id":id,
//     "first_name":firstName,
//     "last_name":lastName,
//     "email":emaill
//   }
// console.log(this.obj)

//   this.http.post("http://localhost:5555/employees/",this.obj).subscribe((res:Response)=>{
//     console.log(res);
//   })
// }



  ngOnInit() { }
}

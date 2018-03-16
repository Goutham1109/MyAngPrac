import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-crudedit',
  templateUrl: './crudedit.component.html',
  styleUrls: ['./crudedit.component.css']
})
export class CrudeditComponent implements OnInit {

  id: number;
  employees = [];
  exist = false;
  data: object = {};


  productobj: object = {};
  private headers = new Headers({ 'content-Type': 'application/json' })

  constructor(private http: Http, private route: ActivatedRoute, private router: Router) { }

  update(value: any) {
    console.log(JSON.stringify(value) + "$$$$$$$$$$$$")
    this.productobj = {
      "id": value.id,
      "first_name": value.first_name,
      "last_name": value.last_name,
      "email": value.email,
    };
    console.log(this.productobj)
    const url = `${"http://localhost:5555/employees"}/${this.id}`;
    this.http.put(url, JSON.stringify(this.productobj), { headers: this.headers })
      .toPromise()
      .then(() => {
        this.router.navigate(['/crud']);
      })
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id)
    });
    this.http.get("http://localhost:5555/employees").subscribe(
      (res: Response) => {
        this.employees = res.json();
        for (var i = 0; i < this.employees.length; i++) {
          if (this.employees[i].id == this.id) {
            this.data = this.employees[i];
            this.exist = true;
            break;
          }
        }
      }
    )
  }
}

import { Component, OnInit, NgZone } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import{FilterPipe} from '../crudpipe/FilterPipe';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
  // pipes: [FilterPipe]
})
export class CrudComponent implements OnInit {

  constructor(private http: Http, private router: Router,private zone:NgZone,) { 
    console.log("constr called")
    this.Init();
  }

  Init(){
    this.getData();
  }

  employees = [];

  id: number;
  private headers = new Headers({ 'content-Type': 'application/json' })
  getData() {
    console.log("ccgfbgfh")
    this.http.get("http://localhost:5555/employees").subscribe(
      (res: Response) => {
        this.zone.run(() => { 
        this.employees = res.json(); 
        });
      });
    }
                            
  delete(id) {
    if (confirm("are you sure?")) {
      const url = `${"http://localhost:5555/employees"}/${id}`;

      return this.http.delete(url, { headers: this.headers }).toPromise().then(() => {
        this.getData();
      })
    }
  }

  ngOnInit() {
    this.getData();
  }

  add(employees) {
    this.router.navigate(["/crud/crudadd"]);
    return this.employees;

  }

   openNav() {
      document.getElementById("mySidenav").style.width = "250px";
  }
  
   closeNav() {
      document.getElementById("mySidenav").style.width = "0";
  }


 

}

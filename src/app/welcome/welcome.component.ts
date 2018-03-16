import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-welcome',
  // template:` <h3>welcome</h3>
  // <a routerLink="/login">login</a>
  
  // ` ,
  templateUrl: './welcome.component.html',
  
  styleUrls: ['./welcome.component.css'],

})
export class WelcomeComponent implements OnInit {

public username;
public email;

  
  constructor(private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
this.router.params.subscribe(data=>{
  this.username=data['username'];
  this.email=data['email']
})
  }
  
log(){
  this.route.navigate(["/login"]);
}

}

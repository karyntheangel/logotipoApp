import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  video:boolean=false
  constructor( private router:Router){}

  ngOnInit(): void {
    
  }

redirectLogin(){
  this.router.navigate(['login'])
}

videoPlayer(){
  this.video=true
}


}

import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { faMapSigns } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public faMapSigns = faMapSigns;

  constructor(private router: Router) { }

  // Session Management
  ngOnInit(): void {
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['login'])
    }
  }

  signoutProcess() {
    sessionStorage.removeItem('sid')
    this.router.navigate(['login']);
  }

}

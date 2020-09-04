import { Component, OnInit } from '@angular/core';
import { faMapSigns } from '@fortawesome/free-solid-svg-icons';


import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public faMapSigns = faMapSigns;
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    Email: ['', Validators.required],
    Password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void { }

  // loginProcessHere() {
  //   const data = this.fbFormGroup.value;
  //   console.log(data);

  //   if (data.username === 'angular' && data.password === 'admin') {
  //     sessionStorage.setItem('sid', 'true');
  //     this.router.navigate(['home/home-page']);
  //   } else {
  //     this.uiInvalidCredential = true;
  //   }
  // }

  // Using DB validation
  async loginProcessHere() {
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = "http://localhost:3000/login";
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['home']);
    } else {
      this.uiInvalidCredential = true;
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { faMapSigns } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public faMapSigns = faMapSigns;
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]*")]],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[.]+[a-zA-z0-9-.]+$")]],
    mobile: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void { }

  async registerHere() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3000/adduser';

    await this.http.post(url, data).toPromise();

    this.router.navigate(['login']);
  }

  get username() {
    return this.fbFormGroup.get('username');
  };

  get email() {
    return this.fbFormGroup.get('email');
  };
}
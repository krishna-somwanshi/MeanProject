// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-forgotpassword',
//   templateUrl: './forgotpassword.component.html',
//   styleUrls: ['./forgotpassword.component.css']
// })
// export class ForgotpasswordComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  myFormGroup = new FormGroup({
    "Email": new FormControl(),
    "Password": new FormControl(),
    "Confirm_Password": new FormControl()
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  async updateUser() {
    const input = this.myFormGroup.value;
    console.log(input);

    const url = "http://localhost:3000/forgotpassword";
    await this.http.post(url, input).toPromise();
    this.myFormGroup.reset();
  }

}
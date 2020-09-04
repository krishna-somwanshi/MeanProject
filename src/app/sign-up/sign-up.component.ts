import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  myFormGroup = new FormGroup({
    "First_Name": new FormControl('', [
      Validators.required, Validators.pattern("[a-zA-Z ]*")
    ]),

    "Last_Name": new FormControl('', [
      Validators.required, Validators.pattern("[a-zA-Z]*")
    ]),

    "Email": new FormControl('', [
      Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[.]+[a-zA-z0-9-.]+$")
    ]),

    "Password": new FormControl(),

    "Confirm_Password": new FormControl()
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  async registerUser() {
    const input = this.myFormGroup.value;
    console.log(input);
    const url = "http://localhost:3000/register";
    await this.http.post(url, input).toPromise();
    this.myFormGroup.reset();
  }

  get First_Name() {
    return this.myFormGroup.get('First_Name');
  };

  get Last_Name() {
    return this.myFormGroup.get('Last_Name');
  };

  get Email() {
    return this.myFormGroup.get('Email');
  };

}













// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

// import { faAirFreshener } from '@fortawesome/free-solid-svg-icons';


// @Component({
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.css']
// })
// export class SignUpComponent implements OnInit {

//   public FAirFreshner = faAirFreshener;
//   public uiInvalidCredential = false;

//   public fbFormGroup = this.fb.group({
//     username: ['', Validators.required,],
//     password: ['', Validators.required],
//     email: ['', Validators.required],
//     mobile: ['', Validators.required],
//   });

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private http: HttpClient
//   ) { }

//   ngOnInit(): void { }

//   async registerHere() {
//     const data = this.fbFormGroup.value;
//     const url = 'http://localhost:3000/adduser';

//     await this.http.post(url, data).toPromise();

//     this.router.navigate(['login']);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
  name: new FormControl(null,Validators.required),
  email:  new FormControl(null,[Validators.email,Validators.required]),
  phone: new FormControl(null,Validators.required),
  password: new FormControl(null,Validators.required),
  cpass: new FormControl(null,Validators.required)
  })

  loginForm:FormGroup = new FormGroup({
    email:  new FormControl(null,[Validators.email,Validators.required]),
    phone: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required),
    })
  

  constructor(private _router:Router, private _UserService:UserService) { }

  ngOnInit(): void {
  }

  moveToLogin(){
    this._router.navigate(['/login']);
  }
  
  register(){
   if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value)){
      console.log('Invalid Form'); return;
    }
  this._UserService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data =>{console.log(data); this._router.navigate(['/user']);},
      error => console.error(error)
    )
    //console.log(JSON.stringify(this.registerForm.value));
  }

  login(){
    if(!this.loginForm.valid){
      console.log('Invalid'); return;
    }
    //console.log(JSON.stringify(this.loginForm.value));
    this._UserService.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data =>{console.log(data); this._router.navigate(['/user']);},
      error=> console.error(error)
    )


  }




 
}
function data(data: any) {
  throw new Error('Function not implemented.');
}


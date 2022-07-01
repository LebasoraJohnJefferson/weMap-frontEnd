import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isPasswordMatch:boolean = false
  firstFormInteraction:boolean = false
  registerUser = this.fb.group({
    firstName:[null,Validators.required],
    lastName:[null,Validators.required],
    email:[null,[Validators.required,Validators.email]],
    password:[null,[
      Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/),
      Validators.required
    ]],
    confirmPassword:['',Validators.required],
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn('Your order has been submitted', this.registerUser.value);
    if(this.registerUser.valid){
      this.firstFormInteraction = false
    } else{
      this.firstFormInteraction = true
    }
    this.registerUser.reset();
  }

  isMatch(){
    this.isPasswordMatch = this.registerUser.value.password === this.registerUser.value.confirmPassword ? false: true
  }

}

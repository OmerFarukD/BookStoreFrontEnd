import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm()
  }
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }
  login() {
    let loginModel = Object.assign({}, this.loginForm.value)
    if (this.loginForm.valid) {
      this.authService.login(loginModel).subscribe(response => {
        localStorage.setItem("token",response.data.token)
        this.toastrService.success(response.message, "Başarılı")
      }, errorResponse => {
        this.toastrService.error(errorResponse.error)
      });
    }
  }
}

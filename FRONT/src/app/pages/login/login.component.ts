import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { ApiService } from '../service/api.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  profileForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login() {
    console.log(
      this.profileForm.value.username,
      this.profileForm.value.password,
    )
    this.api
      .getLoginToken(
        this.profileForm.value.username,
        this.profileForm.value.password,
      )
      .subscribe((token) => {
        if (token) {
          this.api.tokenLocal(token)
          this.router.navigateByUrl('/dashboard')
        } else {
          console.log('erro')
        }
      })
  }
}

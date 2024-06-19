import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth/auth-service.service';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  signInForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    if (authService.isLoggedIn()) {
      router.navigate(['/admin']);
    }

    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    const { email, password } = this.signInForm.value;

    this.authService
      .signIn(email, password)
      .then(() => {
        // Handle successful sign-in
        this.errorMessage = null;
        console.log('Signed in successfully');

        this.router.navigate(['/admin']);
      })
      .catch((error) => {
        // Handle errors here
        this.errorMessage = error.message;
        console.log(error.message);
      });
  }
}

import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../service/auth/auth-service.service';
import { CommonModule } from '@angular/common';
import { onAuthStateChanged } from '@angular/fire/auth';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  signInLabel: string = '';
  isAdmin = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.getAuthState().onAuthStateChanged((user) => {
      if (user) {
        this.isAdmin = true;
        this.signInLabel = 'Admin';
      } else {
        this.isAdmin = false;
        this.signInLabel = 'SignIn';
      }
    });
  }

  onSignOut() {
    this.auth.signOut();
    this.router.navigate(['/login']);
  }
}

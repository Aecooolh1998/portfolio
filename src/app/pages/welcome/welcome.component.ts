import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  
  constructor(
    private router: Router
  ) {}

  public navigateToContentPage(): void {
    this.router.navigate(['/Aaron-Higgins'])
  }
}

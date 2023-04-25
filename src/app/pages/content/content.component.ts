import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  constructor(
    private router: Router
    ) {}

  public ngOnInit(): void {}

  public goBack(): void {
    this.router.navigate(['']);
  }
}

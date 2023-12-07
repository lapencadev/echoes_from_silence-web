import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lyrics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lyrics.component.html',
  styleUrl: './lyrics.component.scss'
})
export class LyricsComponent {

  constructor(
    private router: Router
  ) {}

  public volver() {
    this.router.navigateByUrl(`musica`);
  }

}

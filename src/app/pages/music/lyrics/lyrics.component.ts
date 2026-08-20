import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lyrics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lyrics.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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

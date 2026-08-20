import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-concerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './concerts.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './concerts.component.scss'
})
export class ConcertsComponent implements OnInit {
  loading: boolean = true;
  private loadedImages = 0;
  private readonly totalImages = 3;

  ngOnInit(): void {
    // Fallback to avoid indefinite spinner if an image event is missed.
    setTimeout(() => {
      this.loading = false;
    }, 8000);
  }

  onImageSettled(): void {
    this.loadedImages += 1;
    if (this.loadedImages >= this.totalImages) {
      this.loading = false;
    }
  }
}

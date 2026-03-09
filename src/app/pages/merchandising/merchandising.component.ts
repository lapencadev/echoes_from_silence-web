import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-merchandising',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './merchandising.component.html',
  styleUrl: './merchandising.component.scss'
})
export class MerchandisingComponent implements OnInit {
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

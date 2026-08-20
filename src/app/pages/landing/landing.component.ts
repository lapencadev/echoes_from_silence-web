import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  loading: boolean = true;
  private loadedImages = 0;
  private readonly totalImages = 8;

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

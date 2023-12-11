import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-concerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './concerts.component.html',
  styleUrl: './concerts.component.scss'
})
export class ConcertsComponent {
  loading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;  
    }, 2500);  
  }
}

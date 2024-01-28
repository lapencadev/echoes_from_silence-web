import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-merchandising',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './merchandising.component.html',
  styleUrl: './merchandising.component.scss'
})
export class MerchandisingComponent {
  loading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;  
    }, 2000);  
  }
}

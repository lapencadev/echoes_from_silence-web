import { Component, Input, OnInit } from '@angular/core';
import { Textos } from '../../constantes/textos.constants'
@Component({
  selector: 'app-team',
  standalone: false,
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  loading: boolean = true;
  expandedMember: string | null = null;
  private loadedImages = 0;
  private readonly totalImages = 6;
  readonly constantes = Textos;
  
  @Input() isFlipped: boolean = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
  constructor(
  ){
  }

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

  toggleMember(member: string): void {
    this.expandedMember = this.expandedMember === member ? null : member;
  }
}

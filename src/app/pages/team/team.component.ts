import { Component, Input, OnInit } from '@angular/core';
import { Textos } from '../../constantes/textos.constants'
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  loading: boolean = true;
  expandedMember: string | null = null;
  readonly constantes = Textos;
  
  @Input() isFlipped: boolean = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
  constructor(
  ){
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;  
    }, 2000);  
  }

  toggleMember(member: string): void {
    this.expandedMember = this.expandedMember === member ? null : member;
  }
}

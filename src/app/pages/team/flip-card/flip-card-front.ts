import { Component } from '@angular/core';

@Component({
  selector: 'flip-card-front',
  standalone: false,
  template: `
  <div class="flip-card-front">
    <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardFrontComponent { }
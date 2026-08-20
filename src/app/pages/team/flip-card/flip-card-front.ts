import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'flip-card-front',
  standalone: false,
  template: `
  <div class="flip-card-front">
    <ng-content></ng-content>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardFrontComponent { }
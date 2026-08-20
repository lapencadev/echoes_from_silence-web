import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'flip-card-back',
  standalone: false,
  template: `
   <div class="flip-card-back">
    <ng-content></ng-content>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardBackComponent { }
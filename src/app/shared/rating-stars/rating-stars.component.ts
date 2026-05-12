import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-rating-stars',
  standalone: true,
  imports: [CommonModule], // required for *ngFor
  template: `
    <div class="stars">
      <span
        *ngFor="let star of stars; let i = index"
        (click)="rate(i + 1)"
        (mouseenter)="hover = i + 1"
        (mouseleave)="hover = 0"
      >
        {{ (hover || rating) > i ? '⭐' : '☆' }}
      </span>
    </div>
  `,
  styles: [`
    .stars {
      cursor: pointer;
      font-size: 22px;
      display: inline-block;
    }

    span {
      margin-right: 4px;
      transition: all 0.2s ease;
      display: inline-block;
    }

    span:hover {
      transform: scale(1.15);
    }
  `]
})
export class RatingStarsComponent {
  @Input() rating = 0;
  @Output() ratingChange = new EventEmitter<number>();

  stars = [1, 2, 3, 4, 5];
  hover = 0;

  rate(value: number) {
    this.ratingChange.emit(value);
  }
}
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../core/models/movie.model';
import { MovieService } from '../../core/services/movie.service';
import { RatingStarsComponent } from '../rating-stars/rating-stars.component';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, RatingStarsComponent], 
  template: `
    <div class="card">

      <img
        *ngIf="movie.poster"
        [src]="movie.poster"
        alt="poster"
        class="poster"
      />

      <h3>{{ movie.title }}</h3>

      <p class="meta">
        {{ movie.genre }} | {{ movie.year }}
      </p>

      <p *ngIf="movie.description" class="desc">
        {{ movie.description }}
      </p>

      <app-rating-stars
        [rating]="movie.rating"
        (ratingChange)="onRatingChange($event)">
      </app-rating-stars>

      <button (click)="deleteMovie()" class="delete">
        Delete
      </button>

    </div>
  `,
  styles: [`
    .card {
      border: none;
      border-radius: 12px;
      padding: 0;
      background: white;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .card:hover {
      transform: translateY(-8px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .poster {
      width: 100%;
      height: 250px;
      object-fit: cover;
      margin-bottom: 0;
    }

    h3 {
      margin: 15px 15px 5px 15px;
      font-size: 18px;
      color: #333;
    }

    .meta {
      font-size: 13px;
      color: #999;
      margin: 0 15px 10px 15px;
      font-weight: 500;
    }

    .desc {
      font-size: 13px;
      margin: 8px 15px;
      color: #666;
      line-height: 1.5;
      flex-grow: 1;
    }

    app-rating-stars {
      display: block;
      margin: 10px 15px;
    }

    .delete {
      margin: 0 15px 15px 15px;
      padding: 10px;
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .delete:hover {
      transform: scale(1.02);
      box-shadow: 0 4px 12px rgba(245, 87, 108, 0.4);
    }
  `]
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  constructor(private movieService: MovieService) {}

  async onRatingChange(rating: number) {
    try {
      await this.movieService.updateRating(this.movie.id, rating);
    } catch (error) {
      console.error('MovieCardComponent: Failed to update rating:', error);
      alert('Unable to update rating. Please try again.');
    }
  }

  async deleteMovie() {
    try {
      await this.movieService.deleteMovie(this.movie.id);
    } catch (error) {
      console.error('MovieCardComponent: Failed to delete movie:', error);
      alert('Unable to delete movie. Please try again.');
    }
  }
}
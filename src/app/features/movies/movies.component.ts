import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MovieService } from '../../core/services/movie.service';
import { MovieCardComponent } from '../../shared/movie-card/movie-card.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, MovieCardComponent], 
  template: `
    <div class="container">

      <div class="controls">
        <input
          placeholder="Search movies..."
          (input)="onSearch($event)"
        />

        <select (change)="onSort($event)">
          <option value="rating">Sort by Rating</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>

      <div class="grid">
        <app-movie-card
          *ngFor="let movie of movieService.sortedMovies()"
          [movie]="movie">
        </app-movie-card>
      </div>

    </div>
  `,
  styles: [`
    .container {
      padding: 40px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .controls {
      display: flex;
      gap: 15px;
      margin-bottom: 40px;
      flex-wrap: wrap;
      align-items: center;
    }

    input, select {
      padding: 12px 15px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      font-size: 14px;
      transition: all 0.3s ease;
    }

    input:focus, select:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    input {
      flex: 1;
      min-width: 250px;
    }

    select {
      cursor: pointer;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 25px;
    }

    @media (max-width: 768px) {
      .grid {
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 15px;
      }

      .controls {
        flex-direction: column;
      }

      input {
        min-width: 100%;
      }
    }
  `]
})
export class MoviesComponent {

  constructor(public movieService: MovieService) {}

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.movieService.searchTerm.set(value);
  }

  onSort(event: Event) {
    const value = (event.target as HTMLSelectElement).value as 'rating' | 'title';
    this.movieService.sortOption.set(value);
  }
}
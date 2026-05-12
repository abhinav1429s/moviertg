import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieInput } from '../../core/models/movie.model';
import { MovieService } from '../../core/services/movie.service';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="form-container">

      <h2>Add New Movie</h2>

      <form (ngSubmit)="addMovie()">

        <input [(ngModel)]="movie.title" name="title" placeholder="Title" required />

        <input [(ngModel)]="movie.genre" name="genre" placeholder="Genre" />

        <input [(ngModel)]="movie.year" name="year" type="number" placeholder="Year" />

        <input [(ngModel)]="movie.rating" name="rating" type="number" min="1" max="5" placeholder="Rating (1-5)" required />

        <input [(ngModel)]="movie.poster" name="poster" placeholder="Poster URL" />

        <textarea [(ngModel)]="movie.description" name="description" placeholder="Description"></textarea>

        <button type="submit">Add Movie</button>

      </form>

    </div>
  `,
  styles: [`
    .form-container {
      max-width: 500px;
      margin: 40px auto;
      padding: 40px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    h2 {
      margin: 0 0 30px 0;
      color: #333;
      font-size: 28px;
      text-align: center;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    input, textarea {
      padding: 12px 15px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      font-size: 14px;
      font-family: inherit;
      transition: all 0.3s ease;
    }

    input:focus, textarea:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    textarea {
      resize: vertical;
      min-height: 100px;
    }

    button {
      padding: 12px 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 16px;
      transition: all 0.3s ease;
      margin-top: 10px;
    }

    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
    }

    button:active {
      transform: translateY(0);
    }
  `]
})
export class AddMovieComponent {
  movie: MovieInput = {
    title: '',
    genre: '',
    year: 2024,
    rating: 1,
    poster: '',
    description: ''
  };

  constructor(private movieService: MovieService) {}

  async addMovie() {
    console.log('AddMovieComponent: addMovie called with:', this.movie);
    try {
      console.log('AddMovieComponent: calling movieService.addMovie');
      await this.movieService.addMovie(this.movie);
      console.log('AddMovieComponent: movieService.addMovie succeeded');
      
      console.log('AddMovieComponent: resetting form');
      this.movie = {
        title: '',
        genre: '',
        year: 2024,
        rating: 1,
        poster: '',
        description: ''
      };
    } catch (error) {
      console.error('AddMovieComponent: Failed to add movie:', error);
      alert('Failed to add movie. Please try again.');
    }
  }
}
import { Injectable, signal, computed } from '@angular/core';
import { Movie, MovieInput } from '../models/movie.model';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private readonly apiUrl = 'http://localhost:5001/api/movies';
  private movies = signal<Movie[]>([]);
  searchTerm = signal('');
  sortOption = signal<'rating' | 'title'>('rating');

  filteredMovies = computed(() =>
    this.movies().filter(m =>
      m.title.toLowerCase().includes(this.searchTerm().toLowerCase())
    )
  );

  sortedMovies = computed(() => {
    return [...this.filteredMovies()].sort((a, b) =>
      this.sortOption() === 'rating'
        ? b.rating - a.rating
        : a.title.localeCompare(b.title)
    );
  });

  constructor() {
    this.loadMovies();
  }

  private async request<T>(path = '', init: RequestInit = {}): Promise<T> {
    const headers = new Headers(init.headers);
    if (init.body && !headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/json');
    }

    return fetch(`${this.apiUrl}${path}`, {
      ...init,
      headers
    }).then(async response => {
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || response.statusText);
      }
      return response.status === 204 ? (undefined as unknown as T) : response.json();
    });
  }

  private normalize(movie: any): Movie {
    return { ...movie, id: movie._id ?? movie.id };
  }

  async loadMovies() {
    console.log('MovieService: loadMovies called');
    try {
      const movies = await this.request<any[]>();
      console.log('MovieService: loaded movies from backend:', movies.length, 'movies');
      this.movies.set(movies.map(this.normalize));
      console.log('MovieService: movies signal updated');
    } catch (error) {
      console.error('MovieService: Failed to load movies:', error);
    }
  }

  async addMovie(movie: MovieInput) {
    console.log('MovieService: addMovie called with:', movie);
    try {
      const payload = { ...movie, rating: Math.max(1, Math.min(5, movie.rating ?? 1)) };
      console.log('MovieService: sending payload to backend:', payload);
      
      const result = await this.request('', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      
      console.log('MovieService: backend response:', result);
      console.log('MovieService: calling loadMovies');
      await this.loadMovies();
      console.log('MovieService: loadMovies completed');
    } catch (error) {
      console.error('MovieService: Failed to add movie:', error);
      throw error;
    }
  }

  async updateRating(id: string | number, rating: number) {
    try {
      await this.request(`/${id}/rating`, {
        method: 'PUT',
        body: JSON.stringify({ rating: Math.max(1, Math.min(5, rating)) })
      });
      await this.loadMovies();
    } catch (error) {
      console.error('MovieService: Failed to update rating:', error);
      throw error;
    }
  }

  async deleteMovie(id: string | number) {
    try {
      await this.request(`/${id}`, { method: 'DELETE' });
      await this.loadMovies();
    } catch (error) {
      console.error('MovieService: Failed to delete movie:', error);
      throw error;
    }
  }
}
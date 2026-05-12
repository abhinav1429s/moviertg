import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MoviesComponent } from './features/movies/movies.component';
import { AddMovieComponent } from './features/add-movie/add-movie.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'add', component: AddMovieComponent },

  // fallback route
  { path: '**', redirectTo: '' }
];
import Movie from '../models/movie.model.js';

export const getAllMovies = () => Movie.find().sort({ createdAt: -1 });

export const createMovie = (data) => Movie.create(data);

export const updateMovieRating = (id, rating) =>
  Movie.findByIdAndUpdate(id, { rating }, { new: true });

export const deleteMovieById = (id) => Movie.findByIdAndDelete(id);
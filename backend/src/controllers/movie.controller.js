import {
  getAllMovies,
  createMovie,
  updateMovieRating,
  deleteMovieById
} from '../services/movie.service.js';

export const getMovies = async (req, res, next) => {
  try {
    const movies = await getAllMovies();
    res.json(movies);
  } catch (err) {
    next(err);
  }
};

export const addMovie = async (req, res, next) => {
  try {
    const movie = await createMovie(req.body);
    res.status(201).json(movie);
  } catch (err) {
    next(err);
  }
};

export const updateRating = async (req, res, next) => {
  try {
    const updated = await updateMovieRating(
      req.params.id,
      req.body.rating
    );
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const deleteMovie = async (req, res, next) => {
  try {
    await deleteMovieById(req.params.id);
    res.json({ message: 'Movie deleted' });
  } catch (err) {
    next(err);
  }
};
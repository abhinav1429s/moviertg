import express from 'express';
import {
  getMovies,
  addMovie,
  updateRating,
  deleteMovie
} from '../controllers/movie.controller.js';

const router = express.Router();

router.get('/', getMovies);
router.post('/', addMovie);
router.put('/:id/rating', updateRating);
router.delete('/:id', deleteMovie);

export default router;
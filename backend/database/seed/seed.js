import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import Movie from '../../src/models/movie.model.js';

dotenv.config();

const __dirname = new URL('.', import.meta.url).pathname;

const seedData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'movies.seed.json'), 'utf-8')
);

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'movieapp'
    });

    console.log('MongoDB Connected for Seeding');

    // Clear existing data
    await Movie.deleteMany();

    // Insert seed data
    await Movie.insertMany(seedData);

    console.log('Database Seeded Successfully');

    process.exit();
  } catch (error) {
    console.error('Seeding Error:', error);
    process.exit(1);
  }
};

seedDB();
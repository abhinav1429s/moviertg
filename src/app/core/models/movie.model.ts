export interface Movie {
  id: string;
  title: string;
  genre: string;
  year: number;
  rating: number;
  poster?: string;
  description?: string;
}

export type MovieInput = Omit<Movie, 'id'>;

import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard'; // or whatever you use on Home
import { Movie } from '../types';

const Trending: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/movies/trending')
      .then(res => res.json())
      .then((data: Movie[]) => {
        setMovies(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load trending movies', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading…</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Trending Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Trending;

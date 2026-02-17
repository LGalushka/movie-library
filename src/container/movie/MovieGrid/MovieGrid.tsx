import type { Movie } from '../../../types/movie.types';
import { MovieCard } from '../MovieCard';
import styles from './MovieGrid.module.css';

interface MovieGridProps {
  movies: Movie[];
}

export const MovieGrid = ({ movies }: MovieGridProps) => {
  console.log('MovieGrid получил:', movies);
  if (!movies.length) {
    return (
      <div className={styles.empty}>
        <p>🎬 Фильмы не найдены</p>
        <p className={styles.emptySub}>Попробуйте изменить поисковый запрос</p>
      </div>
    );
  }
  return (
    <div className={styles.grid}>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

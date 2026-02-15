import { MoviesCard } from '../MoviesCard/MoviesCard';
import styles from './MoviesGrid.module.css';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MoviesGridProps {
  movies: Movie[];
}

export const MoviesGrid = ({ movies }: MoviesGridProps) => {
  if (!movies.length) {
    return <p className={styles.empty}>Фильмы не найдены</p>;
  }
  return (
    <div className={styles.grid}>
      {movies.map((movie) => (
        <MoviesCard
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
          imdbID={movie.imdbID}
        />
      ))}
    </div>
  );
};

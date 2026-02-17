import type { Movie } from '../../../types/movie.types';
import styles from './MovieCard.module.css';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const posterUrl =
    movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/300x450?text=No+Poster';
  return (
    <div className={styles.card}>
      <img src={posterUrl} alt={movie.Title} className={styles.poster} loading="lazy" />
      <h3 className={styles.title}>{movie.Title}</h3>
      <p className={styles.year}>{movie.Year}</p>
    </div>
  );
};

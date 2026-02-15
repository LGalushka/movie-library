import styles from './MoviesCard.module.css';

interface MoviesCardProps {
  movie: {
    title: string;
    year: string;
    poster: string;
    imdbID: string;
  };
}

export const MoviesCard = ({ movie }: MoviesCardProps) => {
  const posterUrl =
    movie.poster !== 'N/A' ? movie.poster : 'https://placehold.co/300x450?text=No+Poster';

  const handleClick = () => {
    console.log('Clicked movie:', movie.imdbID);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={posterUrl} alt={movie.title} className={styles.poster} />
      <div className={styles.container}>
        <h3 className={styles.title}>{movie.title}</h3>
        <p className={styles.yesr}>{movie.year}</p>
      </div>
    </div>
  );
};

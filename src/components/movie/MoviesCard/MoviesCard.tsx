import styles from './MoviesCard.module.css';

interface MoviesCardProps {
  title: string;
  year: string;
  poster: string;
  imdbID: string;
}

export const MoviesCard = ({ title, year, poster, imdbID }: MoviesCardProps) => {
  const posterUrl = poster !== 'N/A' ? poster : 'https://placehold.co/300x450?text=No+Poster';

  const handleClick = () => {
    console.log('Clicked movie:', imdbID);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={posterUrl} alt={title} className={styles.poster} />
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.yesr}>{year}</p>
      </div>
    </div>
  );
};

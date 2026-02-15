import { MoviesCard } from '../../movie/MoviesCard/MoviesCard';
import styles from './Main.module.css';

const Main = () => {
  const testMovies = [
    {
      Title: 'Inception',
      Year: '2010',
      imdbID: 'tt1375666',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    },
  ];
  return (
    <div className={styles.mainContainer}>
      {testMovies.map((movie) => (
        <MoviesCard
          key={movie.imdbID}
          title={movie.Title}
          poster={movie.Poster}
          imdbID={movie.imdbID}
          year={movie.Year}
        />
      ))}
    </div>
  );
};

export default Main;

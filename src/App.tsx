import { Layout } from './container/layout/Layout';
import { MovieGrid } from './container/movie/MovieGrid';
import type { Movie } from './types/movie.types';

// временные данные для текста
const testMovie: Movie[] = [
  {
    imdbID: '1',
    Title: 'Inception',
    Year: '2010',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  },
  {
    imdbID: '2',
    Title: 'The Matrix',
    Year: '1999',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  },
  {
    imdbID: '3',
    Title: 'Interstellar',
    Year: '2014',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OExYLTJzNjktM3RkY0U0M2M2My1hN5lLmpgCg.jpg',
  },
];

function App() {
  return (
    <Layout onSearch={(query) => console.log('Поиск', query)}>
      <MovieGrid movies={testMovie} />
    </Layout>
  );
}

export default App;

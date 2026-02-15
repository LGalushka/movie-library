import { Layout } from '../../components/layout/Layout';

import { MoviesGrid } from '../../components/movie/MoviesGrid';

export const HomePage = () => {
  // Временные данные для теста
  // const { movies, loading, error, searchMovies } = useMovies();
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
    <Layout onSearch={() => {}}>
      {' '}
      {/* временная заглушка для onSearch */}
      <MoviesGrid movies={testMovies} />
    </Layout>
  );
};

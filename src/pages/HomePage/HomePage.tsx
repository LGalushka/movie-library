import { MovieGrid } from '../../container/movie/MovieGrid';

import type { Movie } from '../../types/movie.types';
interface HomePageProps {
  movies: Movie[];
  loading: boolean;
  error: string;
}
const HomePage = ({ movies, loading, error }: HomePageProps) => {
  console.log('HomePage movies:', movies); // ← ДОБАВЬ ЭТО!

  if (error) {
    return <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>;
  }

  return (
    <>
      {loading && <p style={{ color: 'white', textAlign: 'center' }}>Загрузка...</p>}
      <MovieGrid movies={movies} />
    </>
  );
};

export default HomePage;

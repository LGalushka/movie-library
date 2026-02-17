import { Layout } from './container/layout/Layout';
import useMovies from './hooks/useMovies';

import HomePage from './pages/HomePage/HomePage';

function App() {
  const { searchMovies, loading, movies, error } = useMovies();

  return (
    <Layout onSearch={searchMovies} loading={loading}>
      <HomePage movies={movies} loading={loading} error={error} />
    </Layout>
  );
}

export default App;

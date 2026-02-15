import { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Layout } from '../components/layout/Layout';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

function MoviesLibrary() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Эта функция будет вызваться из Header
  const handleSearch = async (query: string) => {
    if (!query.trim()) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=c153a66d&s=${query}`);
      const data = await response.json();

      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Неизвестная ошибка при поиске фильмов';

      setError(errorMessage);
      console.error('Ошибка API:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header onSearch={handleSearch} />

      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Layout>
        <div>
          {movies.map((movie) => (
            <div key={movie.imdbID}>
              <h3>
                {movie.Title} ({movie.Year})
              </h3>
              <img
                src={
                  movie.Poster !== 'N/A'
                    ? movie.Poster
                    : 'https://placehold.co/300x450?text=No+Poster'
                }
                alt={movie.Title}
                width="100"
              />
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default MoviesLibrary;

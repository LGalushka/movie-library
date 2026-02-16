import { useState } from 'react';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

function MoviesLibrary() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Простейший поиск по нажатию кнопки
  const searchMovies = async () => {
    if (!search) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=c153a66d&s=${search}`);
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
    <div>
      <h1>🎬 Библиотека фильмов</h1>

      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Введите название фильма..."
        />
        <button onClick={searchMovies}>🔍 Поиск</button>
      </div>

      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

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
    </div>
  );
}

export default MoviesLibrary;

import type { Movie } from '../types/movie.types';

import { useState } from 'react';
const useMovies = () => {
  const [search, setSearch] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const searchMovies = async (query: string) => {
    console.log('searchMovies вызван с:', query);

    if (!query) return;

    setSearch(query);
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=c153a66d&s=${query}`);
      const data = await response.json();
      console.log('Ответ API:', data);

      if (data.Response === 'True') {
        console.log('Устанавливаю movies:', data.Search);
        setMovies(data.Search);
      } else {
        console.log('Фильмов нет, ставлю пустой массив');
        setMovies([]);
        setError(data.Error || 'Ничего не найдено');
      }
    } catch (error) {
      console.error('Ошибка', error);
      setError('Ошибка при запросе к API');
      console.error(error);
    } finally {
      console.log('loading = false');
      setLoading(false);
    }
  };
  return {
    search,
    setSearch,
    movies,
    loading,
    error,
    searchMovies,
  };
};

export default useMovies;

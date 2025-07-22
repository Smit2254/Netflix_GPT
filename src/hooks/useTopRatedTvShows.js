import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTopRatedTvShows } from '../utils/moviesSlice';

const useTopRatedTvShows = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedTvShows(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useTopRatedTvShows;

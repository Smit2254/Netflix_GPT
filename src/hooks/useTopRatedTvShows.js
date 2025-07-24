import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedTvShows } from '../utils/moviesSlice';

const useTopRatedTvShows = () => {
  const dispatch = useDispatch();

  const topRatedTvShows = useSelector((store) => store.movies.topRatedTvShows);

  const getTopRatedTvShows = async () => {
    const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedTvShows(json.results));
  };

  useEffect(() => {
    !topRatedTvShows && getTopRatedTvShows();
  }, []);
};

export default useTopRatedTvShows;

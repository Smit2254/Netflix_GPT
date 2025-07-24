import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className='bg-black'>
        <div className='mt-0 md:-mt-72 px-12 relative z-20'>
          <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
          <MovieList id='top-rated' title={'Top-Rated'} movies={movies.topRatedMovies} />
          <MovieList id='tv-shows' title={'Top-Rated TV-Shows'} movies={movies.topRatedTvShows} />
          <MovieList id='popular' title={'Popular'} movies={movies.popularMovies} />
          <MovieList id='upcoming' title={'Upcoming'} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

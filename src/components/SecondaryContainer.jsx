import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className='bg-black'>
        <div className='-mt-72 px-12 relative z-20'>
          <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
          <MovieList title={'Top-Rated'} movies={movies.topRatedMovies} />
          <MovieList title={'Top-Rated TV-Shows'} movies={movies.topRatedTvShows} />
          <MovieList title={'Popular'} movies={movies.popularMovies} />
          <MovieList title={'Upcoming'} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

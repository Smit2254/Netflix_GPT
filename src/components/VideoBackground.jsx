import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className='relative w-full h-[56.25vw] overflow-hidden'>
      <iframe
        className='absolute top-0 left-0 w-screen aspect-video pointer-events-none'
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}&modestbranding=1&showinfo=0&rel=0`}
        title='YouTube video player'
        allow='autoplay; encrypted-media'
        frameBorder='0'
      ></iframe>
    </div>
  );
};

export default VideoBackground;

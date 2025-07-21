import { IMAGE_CDN_URL } from '../utils/constant';

const MovieCard = ({ posterPath }) => {
  return (
    <div className='min-w-[150px] transform transition-transform hover:scale-110'>
      <img alt='Movie Poster' src={IMAGE_CDN_URL + posterPath} className='w-full rounded-md shadow-lg' />
    </div>
  );
};

export default MovieCard;

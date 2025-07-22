import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_IMAGE } from '../utils/constant';

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-20'>
        <img src={BG_IMAGE} alt='Background Image' />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;

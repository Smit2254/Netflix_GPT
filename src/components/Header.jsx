import { useEffect, useState } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate('/error');
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className='flex justify-between items-center px-6 md:px-12 py-4'>
        {/* Logo & Navigation */}
        <div className='flex items-center gap-10'>
          <img className='w-28 md:w-36' src={LOGO} alt='Netflix Logo' />
          {user && (
            <ul className='hidden md:flex gap-6 text-sm text-white font-semibold'>
              <li className='hover:text-gray-300 transition'>Home</li>
              <li className='hover:text-gray-300 transition'>TV Shows</li>
              <li className='hover:text-gray-300 transition'>Movies</li>
              <li className='hover:text-gray-300 transition'>New & Popular</li>
              <li className='hover:text-gray-300 transition'>My List</li>
            </ul>
          )}
        </div>

        {user && (
          <div className='flex items-center gap-4'>
            <img className='w-10 h-10 rounded-md object-cover' alt='User Icon' src={user.photoURL} />
            <button
              className='group relative inline-flex items-center overflow-hidden rounded-md bg-gradient-to-br from-red-600 to-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:from-red-500 hover:to-red-600 hover:shadow-xl'
              onClick={handleSignOut}
            >
              <span className='absolute inset-0 h-full w-full scale-0 transform bg-white opacity-10 transition-transform duration-300 ease-out group-hover:scale-100' />
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

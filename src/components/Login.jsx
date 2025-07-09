import { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg'
          alt='Background Image'
        />
      </div>

      <div className='absolute right-0 left-0 top-48 mx-auto '>
        <div className='flex items-center justify-center h-full px-4'>
          <div className='w-full max-w-md bg-black/85 p-12 rounded-lg shadow-lg'>
            <h1 className='text-3xl font-semibold text-white mb-6'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
            <form className='flex flex-col space-y-4'>
              {!isSignInForm && (
                <input
                  type='text'
                  placeholder='Full Name'
                  className='p-3 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none'
                />
              )}
              <input
                type='email'
                placeholder='Email or phone number'
                className='p-3 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none'
              />
              <input
                type='password'
                placeholder='Password'
                className='p-3 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none'
              />
              <button
                type='submit'
                className='bg-red-600 hover:bg-red-700 transition-colors text-white py-3 rounded font-semibold'
              >
                {isSignInForm ? 'Sign In' : 'Sign Up'}
              </button>
              <div className='flex items-center justify-between text-sm text-gray-400'>
                <label className='flex items-center space-x-2'>
                  <input type='checkbox' className='form-checkbox bg-zinc-800' />
                  <span>Remember me</span>
                </label>
                <a href='#' className='hover:underline'>
                  Need help?
                </a>
              </div>
            </form>
            <p className='text-sm mt-6 text-white hover:underline cursor-pointer' onClick={toggleSignInForm}>
              {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already Registered? Sign In Now'}
            </p>

            <footer className='mt-8 text-xs text-gray-500 max-w-md'>
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
                <a href='#' className='text-blue-600 hover:underline'>
                  Learn more.
                </a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

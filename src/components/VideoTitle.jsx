const VideoTitle = ({ title, overview }) => {
  return (
    <div className='absolute top-0 left-0 w-screen aspect-video bg-gradient-to-r from-black via-transparent to-transparent px-12 pt-36 text-white z-10'>
      <div className='max-w-2xl'>
        <h1 className='text-5xl font-extrabold mb-4 drop-shadow-md'>{title}</h1>
        <p className='text-lg mb-6 max-w-xl drop-shadow-sm'>{overview}</p>
        <div className='flex gap-4'>
          <button className='bg-white text-xl text-black font-bold px-6 py-2 rounded-md hover:bg-gray-300 transition cursor-pointer flex justify-center items-center gap-2.5'>
            <ion-icon size='large' name='play'></ion-icon>
            Play
          </button>
          <button className='bg-gray-700 bg-opacity-70 text-white font-bold px-6 py-2 rounded-md hover:bg-gray-500 transition cursor-pointer flex justify-center items-center gap-2.5'>
            <ion-icon size='large' name='alert-circle-outline'></ion-icon>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;

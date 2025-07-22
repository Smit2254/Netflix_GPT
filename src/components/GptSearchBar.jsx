const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg'>
        <input
          type='text'
          className='p-4 m-4 col-span-9 bg-white rounded-lg'
          placeholder='What Would You Like To Watch Today'
        />
        <button className='py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg cursor-pointer'>Search</button>
      </form>
    </div>
  );
};

export default GptSearchBar;

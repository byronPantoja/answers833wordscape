const Header = ({ children }) => {
  return (
    <main>
      <div className='relative bg-white py-16 sm:py-24 lg:py-32'>
        <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
          <h2 className='text-base font-semibold uppercase tracking-wider text-indigo-600'>
            Coded by Developer833
          </h2>
          <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Wordscape Answers
          </p>
          <p className='mx-auto mt-5 max-w-prose text-xl text-gray-500'>
            Project Neo Mentorship
            Excercise
          </p>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Header;

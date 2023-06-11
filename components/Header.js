import Link from 'next/link';

const Header = ({ children }) => {
  return (
    <main>
      <div className='relative bg-white py-16 sm:py-24 lg:py-32'>
        <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
          <h2 className='text-base font-semibold uppercase tracking-wider text-indigo-600'>
            Coded by Byron Pantoja
          </h2>
          <Link href={'/'}>
            <a className='mt-5 text-4xl font-extrabold tracking-tight text-gray-900 hover:text-green-600 sm:text-4xl'>
              Answers from a Spreadsheet
            </a>
          </Link>
          <p className='mx-auto mt-5 max-w-prose text-xl text-gray-500'>
            Challenge I took on from my Friend (Project Neo)
          </p>

          {children}
        </div>
      </div>
    </main>
  );
};

export default Header;

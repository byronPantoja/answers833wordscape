import levels from 'data/levels.json';
import Link from 'next/link';

const LevelCard = () => {
  const levelCard = levels.map(
    (lvl) => (
      <div
        key={lvl.id}
        className='pt-6'
      >
        <div className='flow-root rounded-lg bg-gray-50 hover:bg-gray-500 px-6 py-8'>
          <div className='-mt-6'>
            <h3 className='mt-8 text-lg font-medium tracking-tight text-teal-600 hover:text-teal-400'>
              {lvl.title}
            </h3>
            <p className='mt-5 text-base text-gray-500'>
              Level {lvl.id} Tier{' '}
              {lvl.tier}
            </p>
          </div>
          <div className='-mt-6'>
            <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
              {lvl.answer}
            </h3>
          </div>
          <div className='mt-3 text-sm'>
            <Link
              href={`/level${lvl.url}?level=${lvl.id}`}
            >
              <a className='pr-5 font-medium text-indigo-600 hover:text-indigo-500'>
                <span aria-hidden='true'>
                  &larr;
                </span>{' '}
                prev
              </a>
            </Link>
            <Link
              href={`/level${lvl.url}?level=${lvl.id}`}
            >
              <a className='pl-5 font-medium text-indigo-600 hover:text-indigo-500'>
                {' '}
                next
                <span aria-hidden='true'>
                  &rarr;
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    )
  );
  return (
    <div className='mt-12'>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {levelCard}
      </div>
    </div>
  );
};

export default LevelCard;

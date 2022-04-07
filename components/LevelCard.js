import Link from 'next/link';

const LevelCard = ({
  url,
  title,
  answer,
  titleprev,
  urlprev,
  answersprev,
  titlenext,
  urlnext,
  answersnext,
  id,
  section,
  sectiontier,
  tier,
  level,
}) => {
  return (
    <div key={id} className='pt-6'>
      <div className='flow-root rounded-lg bg-gray-50 hover:bg-gray-100 px-6 py-8'>
        <div className='-mt-6'>
          <h3 className='mt-8 text-lg font-medium tracking-tight text-teal-600 hover:text-green-800'>
            {level}
          </h3>
          <p className='mt-5 text-base text-gray-500'>
            The answer for this level
            is:
          </p>
        </div>
        <div className='-mt-6'>
          <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
            {answer}
          </h3>
        </div>
        <div className='mt-3 text-sm'>
          <Link
            href={`/level${url}?level=${id}`}
          >
            <a className='pr-5 font-medium text-indigo-600 hover:text-indigo-500'>
              <span aria-hidden='true'>
                &larr;
              </span>{' '}
              prev
            </a>
          </Link>
          <Link
            href={`/level${url}?level=${id}`}
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
  );
};

export default LevelCard;

import Link from 'next/link';

const TierCard = ({
  tier,
  urltier,
  id,
}) => {
  return (
    <div key={id} className='pt-6'>
      <div className='flow-root rounded-lg bg-gray-50 hover:bg-gray-200 px-6 py-8'>
        <div className='-mt-6'>
          <h3 className='mt-8 text-lg font-medium tracking-tight text-teal-600 hover:text-teal-400'>
            <Link href={`${urltier}`}>
              <a>
                {' '}
                <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                  {tier}
                </h3>
              </a>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TierCard;

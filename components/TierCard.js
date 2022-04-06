import tiers from 'data/tiers.json';
import Link from 'next/link';

const TierCard = () => {
  const tierCard = tiers.map((s) => (
    <div key={s.id} className='pt-6'>
      <div className='flow-root rounded-lg bg-gray-50 hover:bg-gray-500 px-6 py-8'>
        <div className='-mt-6'>
          <h3 className='mt-8 text-lg font-medium tracking-tight text-teal-600 hover:text-teal-400'>
            <Link href={'/tier/level'}>
              {s.sectiontier}
            </Link>
          </h3>
        </div>
      </div>
    </div>
  ));

  return (
    <div className='mt-12'>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {tierCard}
      </div>
    </div>
  );
};

export default TierCard;

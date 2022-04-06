import tiers from 'data/tiers.json';
import Link from 'next/link';

const TierCard = ({
  section,
  sectiontier,
  id,
}) => {
  return (
    <div
      key={section}
      className='flow-root rounded-lg bg-gray-50 hover:bg-gray-200 px-6 py-8'
    >
      <div className='-mt-6'>
        <h3 className='mt-8 text-lg font-medium tracking-tight text-teal-600 hover:text-teal-400'>
          <Link
            href={`/tier/?id=${id}`}
          >
            <a>{sectiontier}</a>
          </Link>{' '}
          {id}
        </h3>
      </div>
    </div>
  );
};

export default TierCard;

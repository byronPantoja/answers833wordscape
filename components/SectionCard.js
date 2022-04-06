import Link from 'next/link';

const SectionCard = ({
  section,
  id,
}) => {
  return (
    <div key={id} className='pt-6'>
      <div className='flow-root rounded-lg bg-gray-50 hover:bg-gray-500 px-6 py-8'>
        <div className='-mt-6'>
          <h3 className='mt-8 text-lg font-medium tracking-tight text-teal-600 hover:text-teal-400'>
            <Link
              href={`/sections/?sections=${section}`}
            >
              <a>{section}</a>
            </Link>
          </h3>
          <p>Sec Card</p>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;

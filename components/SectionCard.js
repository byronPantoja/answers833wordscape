import Link from 'next/link';
import { useRouter } from 'next/router';

const SectionCard = ({
  section,
  id,
}) => {
  const router = useRouter();
  return (
    <div key={id} className='pt-6'>
      <div className='flow-root rounded-lg bg-gray-50 hover:bg-gray-200 px-6 py-8'>
        <div className='-mt-6'>
          <h3 className='mt-8 text-lg font-medium tracking-tight text-teal-600 hover:text-teal-400'>
            <Link
              href={`/sections/?section=${section}`}
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

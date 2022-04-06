import tiers from 'data/tiers.json';
import TierCard from 'components/TierCard';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PageFilter from 'components/PageFilter';
import Header from 'components/Header';

const TierPage = () => {
  const router = useRouter();
  const pageParams =
    router.query.sections;

  return (
    <>
      <Header />
      <div className='mt-12'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {tierPage}
        </div>
      </div>
    </>
  );
};

export default TierPage;

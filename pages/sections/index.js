import levels from 'data/levels.json';
import tiers from 'data/tiers.json';
import TierCard from 'components/TierCard';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PageFilter from 'components/PageFilter';
import Header from 'components/Header';

const TierPage = () => {
  const router = useRouter();
  const { section } = router.query;
  console.log('query', section);

  const tPage = tiers
    .filter((t) => t.section == section)
    .map((tier) => (
      <TierCard
        key={tier.section}
        section={tier.section}
        sectiontier={tier.sectiontier}
        id={tier.id}
      />
    ));

  console.log(
    'match',
    tiers.map((t) => t.section) ===
      section
  );
  return (
    <>
      <Header />
      <div className='mt-12'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {tPage}
        </div>
      </div>
    </>
  );
};

export default TierPage;

import levels from 'data/levels.json';
import tiers from 'data/tiers.json';
import TierCard from 'components/TierCard';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from 'components/Header';
import LevelCard from 'components/LevelCard';
import LevelCardGalllery from 'components/LevelCardGalllery';

const TierPage = () => {
  const router = useRouter();
  const { section, sectiontier } =
    router.query;

  const tPage = tiers
    .filter((t) => t.section == section)
    .map((tier) => (
      <TierCard
        key={tier.id}
        section={tier.section}
        sectiontier={tier.sectiontier}
        id={tier.id}
      />
    ));

  const stPage = levels
    .filter(
      (f) =>
        f.sectiontier == sectiontier
    )
    .map((level) => (
      <LevelCard
        key={level.id}
        id={level.id}
        url={level.url}
        title={level.title}
        tier={level.tier}
        section={level.section}
        answer={level.answer}
        sectiontier={level.sectiontier}
        level={level.level}
      />
    ));

  return (
    <>
      <Header>
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {tPage} {stPage}{' '}
          </div>
        </div>
      </Header>
    </>
  );
};

export default TierPage;

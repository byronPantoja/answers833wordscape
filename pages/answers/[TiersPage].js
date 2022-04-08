import levels from 'data/levels.json';
import TierCard from 'components/TierCard';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from 'components/Header';
import LevelCard from 'components/LevelCard';
import LevelCardGalllery from 'components/LevelCardGalllery';

const tierTitles = new Set();

const tierList = levels.filter((el) => {
  const duplicate = tierTitles.has(
    el.tier
  );
  tierTitles.add(el.tier);
  return !duplicate;
});

const levelTitles = new Set();

const levelsList = levels.filter(
  (el) => {
    const duplicate = levelTitles.has(
      el.level
    );
    levelTitles.add(el.level);
    return !duplicate;
  }
);

const TierPage = () => {
  const router = useRouter();
  const query = router.asPath;
  const tPage = tierList
    .filter(
      (t) => t.urlsection == query
    )
    .map((tier) => (
      <TierCard
        key={tier.id}
        urlsection={tier.urlsection}
        urltier={tier.urltier}
        id={tier.id}
        tier={tier.tier}
      />
    ));

  const stPage = levelsList
    .filter((f) => f.urltier == query)
    .map((level) => (
      <TierCard
        key={level.id}
        id={level.id}
        urltier={level.urltier}
        title={level.title}
        tier={level.tier}
        section={level.section}
        answer={level.answer}
        level={level.level}
      />
    ));

  return (
    <>
      <Header>
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {tPage} {stPage}
          </div>
        </div>
      </Header>
    </>
  );
};

export default TierPage;

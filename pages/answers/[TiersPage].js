import levels from 'data/levels.json';
import TierCard from 'components/TierCard';
import TierLevelCard from 'components/TierLevelCard';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from 'components/Header';
import LevelCard from 'components/LevelCard';
import LevelCardGalllery from 'components/LevelCardGalllery';
import TierGallery from 'components/TierGallery';

const tierTitles = new Set();

const tierList = levels.filter((el) => {
  const duplicate = tierTitles.has(
    el.tier
  );
  tierTitles.add(el.tier);
  return !duplicate;
});

const tierlist = new Set();

const TierList = tierList.filter(
  (el) => {
    const duplicate = tierlist.has(
      el.tierlevel
    );
    tierlist.add(el.tierlevel);
    return !duplicate;
  }
);

const TierPage = () => {
  const router = useRouter();
  const query = router.asPath;
  console.log('tier', query);
  const tierPage = TierList.filter(
    (section) =>
      section.urlsection == query
  ).map((section) => (
    <TierCard
      key={section.id}
      urlsection={section.urlsection}
      urltier={section.urltier}
      id={section.id}
      tier={section.tier}
    />
  ));

  return (
    <>
      <Header>
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {tierPage}
          </div>
        </div>
      </Header>
    </>
  );
};

export default TierPage;

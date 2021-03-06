import levels from 'data/levels.json';
import TierCard from 'components/TierCard';
import { useRouter } from 'next/router';
import Header from 'components/Header';

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

import levels from 'data/levels.json';
import LevelCard from 'components/LevelCard';
import { useRouter } from 'next/router';
import Header from 'components/Header';

const SectionTier = () => {
  const router = useRouter();
  const { sectiontier } = router.query;
  console.log('query', sectiontier);

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
          <div className='grid grid-cols-1 gap-8 '>
            {stPage}
          </div>
        </div>
      </Header>
    </>
  );
};

export default SectionTier;

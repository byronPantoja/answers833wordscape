import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from 'components/Header';
import levels from 'data/levels.json';
import LevelCard from 'components/LevelCard';

const LevelAnswerPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const answerPage = levels
    .filter((f) => f.id == id)
    .map((level) => (
      <div key={level.id}>
        <LevelCard
          id={level.id}
          url={level.url}
          title={level.title}
          tier={level.tier}
          section={level.section}
          answer={level.answer}
          sectiontier={
            level.sectiontier
          }
          level={level.level}
        />
      </div>
    ));

  return (
    <>
      <Header>
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 '>
            {answerPage}
          </div>
        </div>
      </Header>
    </>
  );
};

export default LevelAnswerPage;

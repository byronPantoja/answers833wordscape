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
          urlnext={level.urlnext}
          urlprev={level.urlprev}
          title={level.title}
          tier={level.tier}
          section={level.section}
          answer={level.answer}
          sectiontier={
            level.sectiontier
          }
          level={level.level}
        >
          <div className='mt-3 text-sm'>
            <Link
              href={`/sections/tiers/answers${
                level.urlprev
                  ? `${
                      level.urlprev
                    }/?id=${
                      parseInt(id) - 1
                    }`
                  : ''
              }`}
            >
              <a className='pr-5 font-medium text-indigo-600 hover:text-indigo-500'>
                <span aria-hidden='true'>
                  &larr;
                </span>{' '}
                prev
              </a>
            </Link>
            <Link
              href={`/sections/tiers/answers${
                level.urlnext
                  ? `${
                      level.urlnext
                    }/?id=${
                      parseInt(id) + 1
                    }`
                  : ``
              }`}
            >
              <a className='pl-5 font-medium text-indigo-600 hover:text-indigo-500'>
                {' '}
                next
                <span aria-hidden='true'>
                  &rarr;
                </span>
              </a>
            </Link>
          </div>
        </LevelCard>
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

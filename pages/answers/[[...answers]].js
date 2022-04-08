import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from 'components/Header';
import levels from 'data/levels.json';
import LevelCard from 'components/LevelCard';
import TierLevelCard from 'components/TierLevelCard';
import answersData from 'data/dataUtils/answersData';
const LevelAnswerPage = () => {
  const router = useRouter();
  const query = router.asPath;

  const tierLevelPage = levels
    .filter(
      (tiers) => tiers.urltier == query
    )
    .map((tier) => (
      <TierLevelCard
        key={tier.id}
        id={tier.id}
        url={tier.url}
        level={tier.level}
      />
    ));

  const LevelPage = levels
    .filter((lvls) => lvls.url == query)
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
              href={`/answers${
                level.urlprev
                  ? level.urlprev
                  : '/'
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
              href={`/${
                level.urlnext
                  ? level.urlnext
                  : '/'
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
  console.log('path', router.asPath);

  return (
    <>
      <Header>
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 '>
            {tierLevelPage}
            {LevelPage}
          </div>
        </div>
      </Header>
    </>
  );
};

export default LevelAnswerPage;

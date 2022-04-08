import Link from 'next/link';
import levels from 'data/levels.json';

const sectionTitles = new Set();

const sectionList = levels.filter(
  (el) => {
    const duplicate = sectionTitles.has(
      el.section
    );
    sectionTitles.add(el.section);
    return !duplicate;
  }
);

const SectionsList = () => {
  return (
    <>
      {sectionList.map((level) => (
        <div
          key={level.id}
          className='pt-6'
        >
          <div className='flow-root rounded-lg bg-gray-50 hover:bg-gray-200 px-6 py-8'>
            <div className='-mt-6'>
              <h3 className='mt-8 text-lg font-medium tracking-tight text-teal-600 hover:text-teal-400'>
                <Link
                  href={`${level.urlsection}`}
                >
                  <a>{level.section}</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SectionsList;

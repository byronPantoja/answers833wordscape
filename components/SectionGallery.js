import SectionCard from 'components/SectionCard';
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

const SectionGallery = () => {
  const sectionCard = sectionList.map(
    (section) => (
      <SectionCard
        key={section.id}
        section={section.section}
        id={section.id}
        urlsection={section.urlsection}
      />
    )
  );

  return (
    <div className='mt-12'>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {sectionCard}
      </div>
    </div>
  );
};

export default SectionGallery;

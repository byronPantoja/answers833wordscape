import Link from 'next/link';
import SectionCard from 'components/SectionCard';
import sections from 'data/sections.json';

const SectionGallery = () => {
  const sectionCard = sections.map(
    (s) => (
      <SectionCard
        key={s.id}
        section={s.section}
        id={s.id}
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

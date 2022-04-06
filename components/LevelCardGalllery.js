import levels from 'data/levels.json';
import LevelCard from 'components/LevelCard';

const LevelCardGalllery = () => {
  const levelCard = levels.map(
    (lvl) => (
      <LevelCard
        key={lvl.id}
        {...lvl}
      />
    )
  );
  return (
    <div className='mt-12'>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {levelCard}
      </div>
    </div>
  );
};

export default LevelCardGalllery;
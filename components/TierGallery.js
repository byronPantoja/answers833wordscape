import TierCard from 'components/TierCard';
import levels from 'data/levels.json';

const TierGallery = () => {
  const tierCard = levels.map(
    (tier) => (
      <TierCard
        key={tier.id && tier.urlsection}
        urltier={tier.urltier}
        id={tier.id}
        tier={tier.tier}
      />
    )
  );

  return (
    <div className='mt-12'>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {tierCard}
      </div>
    </div>
  );
};

export default TierGallery;

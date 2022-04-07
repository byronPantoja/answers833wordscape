import TierCard from 'components/TierCard';
import tiers from 'data/tiers.json';

const TierGallery = () => {
  const tierCard = tiers.map((tier) => (
    <TierCard
      key={tier.id}
      section={tier.section}
      sectiontier={tier.sectiontier}
    />
  ));

  return (
    <div className='mt-12'>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {tierCard}
      </div>
    </div>
  );
};

export default TierGallery;

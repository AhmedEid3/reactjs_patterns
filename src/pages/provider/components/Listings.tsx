import { LoadingSpinner } from '../../../components/LoadingSpinner';

import useListingsContext from '../useListingsContext';

import { Listing } from './Listing';
import { ListingsGrid } from './ListingsGrid';

export function Listings() {
  const { listings } = useListingsContext();

  console.log('Listings-compund', listings);

  if (!listings?.length) return <LoadingSpinner />;

  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}

export default Listings;

import { LoadingSpinner } from '../../../components/LoadingSpinner';

import useListings from '../useListings';

import { Listing } from './Listing';
import { ListingsGrid } from './ListingsGrid';

export function Listings() {
  const listings = useListings();

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

import { LoadingSpinner } from '../../components/LoadingSpinner';
import { IListing } from '../container/IListing';

import { Listing } from './Listing';
import { ListingsGrid } from './ListingsGrid';

interface IListingsProps {
  listings: Array<IListing>;
}

export function Listings({ listings }: IListingsProps) {
  if (!listings.length) return <LoadingSpinner />;

  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}

export default Listings;

import withLoader from '../withLoader';
import { IListing } from './IListing';
import { Listing } from './Listing';
import { ListingsGrid } from './ListingsGrid';

interface IListingsProps {
  data: {
    listings: Array<IListing>;
  };
}

function Listings({ data }: IListingsProps) {
  return (
    <ListingsGrid>
      {data.listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}

const ListingsWithLoader = withLoader(Listings, 'https://house-lydiahallie.vercel.app/api/listings');

export default ListingsWithLoader;

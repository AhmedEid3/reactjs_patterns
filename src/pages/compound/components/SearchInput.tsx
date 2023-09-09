import useListingsContext from '../useListingsContext';
import FlyOut from './FlyOut';

export default function SearchInput() {
  const { listings } = useListingsContext();

  console.log('listings-SearchInput', listings);
  return (
    <FlyOut>
      <FlyOut.Input />

      <FlyOut.List>
        {listings.map((listing) => (
          <FlyOut.ListItems key={listing.id} listing={listing} />
        ))}
      </FlyOut.List>
    </FlyOut>
  );
}

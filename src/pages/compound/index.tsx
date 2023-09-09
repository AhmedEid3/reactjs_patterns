import Listings from './components/Listings';
import SearchInput from './components/SearchInput';
import { ListingsProvider } from './useListingsContext';

const CompoundPage = () => {
  return (
    <main className="container">
      <h1>React Patterns</h1>

      <h2>Compound Pattern</h2>
      <ListingsProvider>
        <SearchInput />
        <Listings />
      </ListingsProvider>
    </main>
  );
};

export default CompoundPage;

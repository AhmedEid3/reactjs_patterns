import { PropsWithChildren, createContext, useContext } from 'react';
import useListings from './useListings';
import { IListing } from './IListing';

const ListingsContext = createContext<Array<IListing>>([]);

export const ListingsProvider = ({ children }: PropsWithChildren) => {
  const listings = useListings();

  return <ListingsContext.Provider value={listings}>{children}</ListingsContext.Provider>;
};

export default function useListingsContext() {
  return useContext(ListingsContext);
}

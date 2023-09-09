import React from 'react';
import { IListing } from './IListing';

export default function useListings() {
  const [data, setData] = React.useState<Array<IListing>>([]);

  React.useEffect(() => {
    fetch('https://house-lydiahallie.vercel.app/api/listings')
      .then((res) => res.json())
      .then((res) => setData(res.listings));
  }, []);

  return data;
}

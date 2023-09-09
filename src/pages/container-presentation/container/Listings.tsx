import React from 'react';
import Listings from '../presentation/Listings';
import { IListing } from './IListing';

export default function ListingsContainerComponent() {
  const [data, setData] = React.useState<Array<IListing>>([]);

  React.useEffect(() => {
    fetch('https://house-lydiahallie.vercel.app/api/listings')
      .then((res) => res.json())
      .then((res) => setData(res.listings));
  }, []);

  if (!data) return null;

  return <Listings listings={data} />;
}

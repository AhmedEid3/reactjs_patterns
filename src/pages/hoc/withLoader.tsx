import { useEffect, useState } from 'react';
import { LoadingSpinner } from '../../components/LoadingSpinner';

export default function withLoader(Element: any, url: string) {
  return (props: any) => {
    /* Add logic to:
    1. Fetch data from the url that was passed as an argument.
    2. Show the <LoadingSpinner /> while the  data is being fetched.
    3. Pass the fetched data to the wrapped component.
    */

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res))
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <LoadingSpinner />;

    return <Element {...props} data={data} />;
  };
}

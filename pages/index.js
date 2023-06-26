import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Featured from '@/components/Featured';
import { Product } from '@/models/Product';
import NewProducts from '@/components/NewProducts';

export default function HomePage({ data, newProducts }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://musicpro.bemtorres.win/api/v1/test/saludo');
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Featured product={data} />
      <NewProducts products={newProducts} />
      <h1>{message}</h1>
    </div>
  );
}








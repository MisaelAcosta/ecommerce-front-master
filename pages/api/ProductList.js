import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://musicpro.bemtorres.win/api/v1/bodega/producto');
        const data = await response.json();

        if (Array.isArray(data)) {
          setProducts(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Productos</h2>
      <div>
        {Array.isArray(products) &&
          products.map(product => (
            <li key={product.id}>
              <img src={product.asset} alt={product.nombre} />
              <h3>{product.nombre}</h3>
              <p>{product.descripcion}</p>
              <p>Precio: {product.precio}</p>
            </li>
          ))}
      </div>
    </div>
  );
};

export default ProductList;


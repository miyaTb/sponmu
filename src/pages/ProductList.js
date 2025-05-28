import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../hooks/productBox';
import ItemBox from '../components/ItemBox';

function ProductListPage() {
  const { products } = useProducts();

  return (
    <div className='ProductItem'>
      {products.map((product) => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <ItemBox
            id={product.id}
            imageUrl={product.imageUrl}
            title={product.name}
            price={`¥ ${product.price}(税込)`}
          />
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;

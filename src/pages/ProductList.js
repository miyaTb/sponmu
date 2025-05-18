// pages/productList.js
import React from 'react';
import useProducts from '../hooks/productBox';
import ItemBox from '../components/ItemBox'; // 汎用的な箱コンポーネントをインポート

function ProductListPage() {
  const { products } = useProducts();

  return (
    <div>
      <h1>Product List</h1>
      <h2>商品一覧</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ItemBox
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.name}
            description={`¥ ${product.description}(税込)`} 
          />
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
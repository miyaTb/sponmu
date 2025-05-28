import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Link をインポート
import useProducts from '../hooks/productBox';
import ProductDetail from '../components/ProductDetail'; // ItemBox をインポート

function Product() {
    const { id } = useParams();
    const { products } = useProducts();
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      const foundProduct = products.find((p) => p.id === parseInt(id, 10));
      setProduct(foundProduct);
    }, [id, products]);
  
    if (!product) {
      return <div>Loading...</div>;
    }

  return (
      <div>
      <ProductDetail
        id={product.id}
        imageUrl={product.imageUrl}
        title={product.name}
        material={`原材料名： ${product.material}`}
        amount={`内容量： ${product.amount}`}
        method={`保存方法：${product.method}`}
        date={`賞味期限：${product.method}`}
        arerugen={`アレルギー：${product.arerugen}`}
        catchcopy={product.catchcopy}
        description={product.description}
        price={`¥ ${product.price}(税込)`}
      />
      </div>
  );
}

export default Product;

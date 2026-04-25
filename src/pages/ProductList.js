import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productData from '../data/productBox.json';
import ItemBox from '../components/ItemBox';
import milkYogurt from '../assets/milkYogurt.png';
import saltedCheese from '../assets/saltedCheese.png';
import yogurtSpread from '../assets/yogurtSpread.png';
import happyYogurt from '../assets/happyYogurt.png';
import creamCheese from '../assets/creamCheese.png';
import milk from '../assets/milk.png';
import './css/Product.css'

// 1. 画像ファイル名とインポートした変数のマッピング
const imageMap = {
  'milkYogurt.png': milkYogurt,
  'milk.png': milk,
  'saltedCheese.png': saltedCheese,
  'creamCheese.png' : creamCheese,
  'happyYogurt.png' : happyYogurt,
  'yogurtSpread.png' : yogurtSpread
};

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsWithId = productData.map((item, index) => {
      const resolvedImageUrl = imageMap[item.imageFileName];

      return {
        ...item,
        id: index + 1,
        imageUrl: resolvedImageUrl || '/images/default-image.jpg', 
        price: item.price || '0', 
      };
    });
    setProducts(productsWithId);
  }, []); 

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
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productData from '../data/productBox.json';
import ItemBox from '../components/ItemBox';
import yogurtImage from '../assets/yogurt.png';
import cheeseImage from '../assets/cheese.png';
import milkImage from '../assets/milk.png';
import './css/Product.css'

// 1. 画像ファイル名とインポートした変数のマッピング
const imageMap = {
  'yogurt.png': yogurtImage,
  'cheese_dip.jpg': cheeseImage,
  'cheese_toast.jpg': milkImage,
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
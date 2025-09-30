import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productData from '../data/productBox.json';
import ItemBox from '../components/ItemBox';
import yogurtImage from '../assets/yogult.png';
import yogurt2Image from '../assets/yogult2.png';
import cheeseImage from '../assets/cheese.png';
import milkImage from '../assets/milk.png';

// 1. 画像ファイル名とインポートした変数のマッピング
const imageMap = {
  'yogult.png': yogurtImage,
  'yogurt_smoothie.png': yogurt2Image,
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
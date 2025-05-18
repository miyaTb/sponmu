// hooks/product.js
import { useState } from 'react';

const initialProducts = [
  {
    id: 1,
    name: '手作りクッキー',
    description: 300,
    imageUrl: '/images/cookie1.jpg',
  },
  {
    id: 2,
    name: 'オリジナルブレンドコーヒー豆',
    description: 1500,
    imageUrl: '/images/coffeebeans.png',
  },
  {
    id: 3,
    name: 'ハンドメイドキャンドル',
    description: 1800,
    imageUrl: '/images/candle.jpeg',
  },
  // ... その他の商品データ
];

function useProducts() {
  const [products] = useState(initialProducts);
  return { products };
}

export default useProducts;
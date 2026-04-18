// hooks/product.js
import { useState } from 'react';
import yogult from '../assets/yogult.png';
import yogurt1Image from '../assets/yogultSub1.png';
import yogurt2Image from '../assets/yogultSub2.png';
import cheeseImage from '../assets/cheese.png';
import milkImage from '../assets/milk.png';
import productData from '../data/productBox.json';

const imageMap = {
  yogult,
  yogurt1Image,
  yogurt2Image,
  cheeseImage,
  milkImage
};

const initialProducts = productData.map(product => ({
  ...product,
  imageUrl: imageMap[product.imageUrl] || yogult
}));

function useProducts() {
  const [products] = useState(initialProducts);
  return { products };
}

export default useProducts;

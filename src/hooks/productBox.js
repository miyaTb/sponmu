// hooks/product.js
import { useState } from 'react';
import yogurtImage from '../assets/yogult.png';
import yogurt2Image from '../assets/yogult2.png';
import cheeseImage from '../assets/cheese.png';
import milkImage from '../assets/milk.png';
import productData from '../data/productBox.json';

const imageMap = {
  yogurtImage,
  yogurt2Image,
  cheeseImage,
  milkImage
};

const initialProducts = productData.map(product => ({
  ...product,
  imageUrl: imageMap[product.imageUrl] || yogurtImage
}));

function useProducts() {
  const [products] = useState(initialProducts);
  return { products };
}

export default useProducts;
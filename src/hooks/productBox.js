// hooks/product.js
import { useState } from 'react';
import milkYogurt from '../assets/milkYogurt.png';
import milkYogurtSub1 from '../assets/milkYogurtSub1.png';
import milkYogurtSub2 from '../assets/milkYogurtSub2.png';
import saltedCheese from '../assets/saltedCheese.png';
import saltedCheeseSub1 from '../assets/saltedCheeseSub1.png';
import saltedCheeseSub2 from '../assets/saltedCheeseSub2.png';
import yogurtSpread from '../assets/yogurtSpread.png';
import yogurtSpreadSub1 from '../assets/yogurtSpreadSub1.png';
import yogurtSpreadSub2 from '../assets/yogurtSpreadSub2.png';
import happyYogurt from '../assets/happyYogurt.png';
import happyYogurtSub1 from '../assets/happyYogurtSub1.png';
import happyYogurtSub2 from '../assets/happyYogurtSub2.png';
import creamCheese from '../assets/creamCheese.png';
import creamCheeseSub1 from '../assets/creamCheeseSub1.png';
import creamCheeseSub2 from '../assets/creamCheeseSub2.png';
import milk from '../assets/milk.png';
import milkSub1 from '../assets/milkSub1.png';
import milkSub2 from '../assets/milkSub2.png';
import productData from '../data/productBox.json';

const imageMap = {
  milkYogurt,
  milkYogurtSub1,
  milkYogurtSub2,
  milk,
  milkSub1,
  milkSub2,
  creamCheese,
  creamCheeseSub1,
  creamCheeseSub2,
  happyYogurt,
  happyYogurtSub1,
  happyYogurtSub2,
  yogurtSpread,
  yogurtSpreadSub1,
  yogurtSpreadSub2,
  saltedCheese,
  saltedCheeseSub1,
  saltedCheeseSub2
};

const initialProducts = productData.map(product => ({
  ...product,
  imageUrl: imageMap[product.imageUrl] || milkYogurt
}));

function useProducts() {
  const [products] = useState(initialProducts);
  return { products };
}

export default useProducts;

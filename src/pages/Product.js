import React, { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';
import recipesData from '../data/productBox.json'; 
import ProductDetail from '../components/ProductDetail';
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
import './css/Product.css'
import { useRecentlyViewed } from '../context/RecentlyViewedContext';

const imageMap = {
  'milkYogurt.png': milkYogurt,
  'milk.png': milk,
  'saltedCheese.png': saltedCheese,
  'creamCheese.png' : creamCheese,
  'happyYogurt.png' : happyYogurt,
  'yogurtSpread.png' : yogurtSpread
};

const subImageMap ={
  'milkYogurtSub1.png': milkYogurtSub1,
  'milkYogurtSub2.png': milkYogurtSub2,
  'saltedCheeseSub1.png':saltedCheeseSub1,
  'saltedCheeseSub2.png':saltedCheeseSub2,
  'milkSub1.png':milkSub1,
  'milkSub2.png':milkSub2,
  'creamCheeseSub1.png': creamCheeseSub1,
  'creamCheeseSub2.png': creamCheeseSub2,
  'happyYogurtSub1.png' : happyYogurtSub1,
  'happyYogurtSub2.png' : happyYogurtSub2,
  'yogurtSpreadSub1.png' : yogurtSpreadSub1,
  'yogurtSpreadSub2.png' : yogurtSpreadSub2
}

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addViewedProduct } = useRecentlyViewed();

  useEffect(() => {
    // 取得したJSONデータにidを追加する処理
    const productsWithId = recipesData.map((item, index) => ({
      ...item,
      id: index + 1, // 各アイテムにユニークなIDを付与
      imageUrl: imageMap[item.imageFileName],
      subImageUrl1: subImageMap[item.subImageFileName1],
      subImageUrl2: subImageMap[item.subImageFileName2]
    }));

    // URLのidに一致する商品を見つける
    const foundProduct = productsWithId.find((p) => p.id === parseInt(id, 10));
    setProduct(foundProduct);
    if (foundProduct) {
      addViewedProduct(foundProduct.id);
    }
  }, [id, addViewedProduct]); // idが変わったときに再実行

  if (!product) {
    return <div>Loading...</div>;
  }


  return (
      <div>
      <ProductDetail
        id={product.id}
        imageUrl={product.imageUrl}
        subImageUrl1={product.subImageUrl1}
        subImageUrl2={product.subImageUrl2}
        subtitle={product.subName}
        title={product.name}
        englishName={product.englishName}
        material={`原材料名： ${product.material}`}
        amount={`内容量： ${product.amount}`}
        method={`保存方法：${product.method}`}
        date={`賞味期限：${product.method}`}
        arerugen={`アレルギー：${product.arerugen}`}
        catchcopy={product.catchcopy}
        description={product.description}
        price={`¥ ${product.price}(税込)`}
        priceValue={product.price}
      />
      </div>
  );
}

export default Product;

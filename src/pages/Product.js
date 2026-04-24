import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data/productBox.json'; 
import ProductDetail from '../components/ProductDetail';
import yogult from '../assets/yogult.png';
import yogultSubImage1 from '../assets/yogultSub1.png';
import yogultSubImage2 from '../assets/yogultSub1.png';
import cheeseImage from '../assets/cheese.png';
import milk from '../assets/milk.png';
import './css/Product.css'
import { useRecentlyViewed } from '../context/RecentlyViewedContext';

const imageMap = {
  'yogurt.png': yogult,
  'milk.png': milk,
  'cheese_dip.jpg': cheeseImage,
};

const subImageMap ={
  'yogultSub1.png': yogultSubImage1,
  'yogultSub2.png': yogultSubImage2,
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

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data/productBox.json'; // JSONファイルを直接インポート
import ProductDetail from '../components/ProductDetail';
import yogurtImage from '../assets/yogurt.png';
import yogurtSubImage from '../assets/yogurtsub1.png';
import cheeseImage from '../assets/cheese.png';
import milkImage from '../assets/milk.png';
import './css/Product.css'

const imageMap = {
  'yogurt.png': yogurtImage,
  'milk.png': milkImage,
  'cheese_dip.jpg': cheeseImage,
};

const subImageMap ={
  'yogurtsub1.png': yogurtSubImage,
}

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // 取得したJSONデータにidを追加する処理
    const productsWithId = recipesData.map((item, index) => ({
      ...item,
      id: index + 1, // 各アイテムにユニークなIDを付与
      imageUrl: imageMap[item.imageFileName],
      subImageUrl1: subImageMap[item.subImageFileName1]
    }));

    // URLのidに一致する商品を見つける
    const foundProduct = productsWithId.find((p) => p.id === parseInt(id, 10));
    setProduct(foundProduct);
  }, [id]); // idが変わったときに再実行

  if (!product) {
    return <div>Loading...</div>;
  }


  return (
      <div>
      <ProductDetail
        id={product.id}
        imageUrl={product.imageUrl}
        subImageUrl1={product.subImageUrl1}
        subtitle={product.subName}
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

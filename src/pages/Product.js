import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../hooks/productBox';
import ProductDetail from '../components/ProductDetail'; // ItemBox をインポート
import { useRecentlyViewed } from '../context/RecentlyViewedContext';

function Product() {
    const { id } = useParams();
    const { products } = useProducts();
    const [product, setProduct] = useState(null);
    const { addViewedProduct } = useRecentlyViewed();

    useEffect(() => {
      const foundProduct = products.find((p) => p.id === parseInt(id, 10));
      setProduct(foundProduct);
      if (foundProduct) {
        addViewedProduct(foundProduct.id);
      }
    }, [id, products, addViewedProduct]);
  
    if (!product) {
      return <div>Loading...</div>;
    }

  return (
      <div>
      <ProductDetail
        id={product.id}
        imageUrl={product.imageUrl}
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

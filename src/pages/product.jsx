import React from 'react';

// 商品データの配列 (型定義なし)
const products = [
  { id: 1, name: '商品A', imageUrl: 'https://via.placeholder.com/150/FF0000' ,},
  { id: 2, name: '商品B', imageUrl: 'https://via.placeholder.com/150/00FF00' },
  { id: 3, name: '商品C', imageUrl: 'https://via.placeholder.com/150/0000FF' },
  { id: 4, name: '商品D', imageUrl: 'https://via.placeholder.com/150/FFFF00' },
  { id: 5, name: '商品E', imageUrl: 'https://via.placeholder.com/150/00FFFF' },
  { id: 6, name: '商品F', imageUrl: 'https://via.placeholder.com/150/FF00FF' },
  // ... 他の商品データ
];

// 商品一覧を表示するコンポーネント
const ProductList = () => {
  return (
    <div style={styles.container}>
      <h1>商品一覧</h1>
      <div style={styles.productList}>
        {products.map((product) => (
          <div key={product.id} style={styles.productItem}>
            <img src={product.imageUrl} alt={product.name} style={styles.productImage} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// スタイルオブジェクト
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
  },
  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  productItem: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '200px',
    textAlign: 'center',
  },
  productImage: {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '10px',
  },
};

export default ProductList;
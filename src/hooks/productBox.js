// hooks/product.js
import { useState } from 'react';

const initialProducts = [
  {
    id: 1,
    name: 'しぼりたて生乳ヨーグルト',
    price: 300,
    imageUrl: '../assets/homeHotmilk.png',
    material:'生乳（北海道産）',
    amount:'350g',
    method:'要冷蔵（10度以下）',
    date:'製造日から14日',
    arerugen:'乳',
    description: '一般的なヨーグルトには、風味や口当たりを整えるために、安定剤・香料・砂糖などが加えられることが少なくありません。<br /><br />ですが私たちは、自然の持つ力を信じ、活かすことを選びました。使用するのは、北海道・自社牧場の生乳100％と、選び抜いた乳酸菌のみ。<br /><br />生乳の鮮度を落とさぬよう、搾乳から製造までを一貫管理し、短い時間で製品化しています。<br /><br />加熱処理も最小限に抑え、生きた乳酸菌がそのまま届くように。<br /><br />だからこそ感じられる、「何も足していないのに、こんなに美味しい」という驚き。<br /><br />ヨーグルトが苦手な方でも、「これは食べやすい」「毎日でも続けたい」と感じていただける味に仕上がりました。<br /><br />素材の声を聞き、必要以上に手を加えずに整えるそれが、SPONMUのヨーグルトづくりの原点です。'
    ,
    catchcopy:'「手を加えない」それが一番の贅沢。'
  },
  {
    id: 2,
    name: '牧場の朝ミルク',
    price: 1000,
    imageUrl: '/images/coffeebeans.png',
  },
  {
    id: 3,
    name: 'しあわせ飲むヨーグルト',
    price: 1800,
    imageUrl: '/images/candle.jpeg',
  },
  {
    id: 4,
    name: 'やさしい塩チーズ',
    price: 1000,
    imageUrl: '/images/cookie1.jpg',
  },
  {
    id: 5,
    name: 'まきばのクリームチーズ',
    price: 1000,
    imageUrl: '/images/coffeebeans.png',
  },
  {
    id: 6,
    name: '放牧バター仕立て ヨーグルトスプレッド',
    price: 1000,
    imageUrl: '/images/candle.jpeg',
  }
  // ... その他の商品データ
];

function useProducts() {
  const [products] = useState(initialProducts);
  return { products };
}

export default useProducts;
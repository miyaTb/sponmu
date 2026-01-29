// hooks/product.js
import { useState } from 'react';
import yogurtImage from '../assets/yogult.png';
import yogurt2Image from '../assets/yogult2.png';
import cheeseImage from '../assets/cheese.png';
import milkImage from '../assets/milk.png';

const initialRecipes = [
  {
    id: 1,
    name: 'しぼりたて生乳<br />ヨーグルト',
    miniutes:"1分",
    imageUrl: yogurtImage,
    material:'生乳（北海道産）',
    kcal:'101Kcal',
    material1:'しぼりたて生乳ヨーグルト',
    material2:'お好みのジャム',
    amount1:'100g',
    amount2:'適量',
    method1:'ヨーグルトを器に取り分ける。',
    method2:'お好きなジャムを①の上にかける。',
    description: '<p>一般的なヨーグルトには、風味や口当たりを整えるために、安定剤・香料・砂糖などが加えられることが少なくありません。<br />ですが私たちは、自然の持つ力を信じ、活かすことを選びました。使用するのは、北海道・自社牧場の生乳100％と、選び抜いた乳酸菌のみ。</p><p>生乳の鮮度を落とさぬよう、搾乳から製造までを一貫管理し、短い時間で製品化しています。<br />加熱処理も最小限に抑え、生きた乳酸菌がそのまま届くように。</ p><p>だからこそ感じられる、「何も足していないのに、こんなに美味しい」という驚き。</p><p>ヨーグルトが苦手な方でも、「これは食べやすい」「毎日でも続けたい」と感じていただける味に仕上がりました。<br />素材の声を聞き、必要以上に手を加えずに整えるそれが、SPONMUのヨーグルトづくりの原点です。</p>'
    ,
  },
  {
    id: 2,
    name: '牧場の朝ミルク',
    miniutes:"1分",
    kcal:'101Kcal',
    imageUrl: milkImage,
  },
  {
    id: 3,
    name: 'しあわせ<br />飲むヨーグルト',
    miniutes:"1分",
    kcal:'101Kcal',
    imageUrl: yogurt2Image,
  },
  {
    id: 4,
    name: 'やさしい塩チーズ',
    miniutes:"1分",
    kcal:'101Kcal',
    imageUrl: cheeseImage,
  },
  {
    id: 5,
    name: 'まきばの<br />クリームチーズ',
    miniutes:"1分",
    kcal:'101Kcal',
    imageUrl: cheeseImage,
  },
  {
    id: 6,
    name: '放牧バター仕立て<br />ヨーグルトスプレッド',
    miniutes:"1分",
    kcal:'101Kcal',
    imageUrl: yogurt2Image,
  }
  // ... その他の商品データ
];

function useRecipes() {
  const [recipes] = useState(initialRecipes);
  return { recipes };
}

export default useRecipes;
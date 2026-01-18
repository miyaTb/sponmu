import React from "react";
import styles from "./MyComponent.module.css";

// import rankingOne from "../assets/rank_one.png";
// import rankingTwo from "../assets/rank_two.png";
// import rankingThree from "../assets/rank_three.png";

const imageMap = {
  yogurtImage: require("../assets/itemyoghurt.png"),
  milkImage: require("../assets/itemmilk.png"),
  yogurt2Image: require("../assets/itemyoghurt.png"),
  cheeseImage: require("../assets/itemcheese.png"),
};

const rankingMap = {
  1: require("../assets/rank_one.png"),
  2: require("../assets/rank_two.png"),
  3: require("../assets/rank_three.png"),
};

const ItemCard = ({
  name,
  imageUrl,
  description,
  catchcopy,
  index,
  className,
}) => {
  const textLines = name.split("\n");

  // 画像読み込み
  const displayImage = imageMap[imageUrl] || "";

  const rankOrder = [2, 1, 3];
  const currentRank = rankOrder[index] || 1; // 該当なしなら1位をデフォルトに

  const displayRankingImage = rankingMap[currentRank];

  return (
    <div className={`${styles.itemCard} ${className}`}>
      <div className={styles.circleContainer}>
        {/* 全てを重ねるためのコンテナ */}
        <div className={styles.cardVisualArea}>
          {/* --- SVGによる円周テキスト --- */}
          <svg viewBox="0 0 300 300" className={styles.circleSvg}>
            <defs>
              {/* 上側の文字用パス (時計回り) */}
              <path
                id="topPath"
                d="M 10,150 A 140,140 0 1,1 150,290"
                fill="none"
              />
              {/* 下側の文字用パス (反時計回りに見えないように調整された弧) */}
              <path
                id="bottomPath"
                d="M 10,150 A 110,110 0 0,0 290,180"
                fill="none"
              />
            </defs>

            {/* 上側：キャッチコピー */}
            <text className={styles.itemCardCatchcopyText}>
              <textPath href="#topPath" startOffset="45%" textAnchor="middle">
                {catchcopy}
              </textPath>
            </text>

            {/* 下側：商品名 (改行をスペースに変換して1行で表示) */}
            <text className={styles.itemCardNameText}>
              <textPath
                href="#bottomPath"
                startOffset="45%"
                textAnchor="middle"
              >
                {name.replace(/\n/g, " ")}
              </textPath>
            </text>
          </svg>

          {/* --- 中央のコンテンツ（画像とランキング） --- */}
          <div className={styles.itemCardContent}>
            <div className={styles.itemCardRanking}>
              <img src={displayRankingImage} alt="ranking" />
            </div>
            <img
              className={styles.itemCardImage}
              src={displayImage}
              alt={name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

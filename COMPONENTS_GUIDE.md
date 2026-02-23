# 共通コンポーネント取扱説明書

このドキュメントでは、プロジェクトで使用可能な共通コンポーネントの使い方を説明します。

---

## 目次
1. [ActionButton](#actionbutton) - アクションボタン
2. [QuantityButton](#quantitybutton) - 数量調整ボタン
3. [PageTitle](#pagetitle) - ページタイトル

---

## ActionButton

統一されたスタイルのアクションボタンコンポーネント。

### インポート
```jsx
import ActionButton from './components/ActionButton';
```

### Props

| プロパティ | 型 | デフォルト | 説明 |
|----------|------|----------|------|
| children | ReactNode | - | ボタン内に表示するテキストや要素 |
| onClick | function | - | クリック時のイベントハンドラ |
| variant | string | 'primary' | ボタンのバリエーション（'primary', 'secondary', 'gray'） |
| className | string | '' | 追加のCSSクラス |

### バリエーション

- **primary**: 緑色の背景、白文字（メインアクション用）
- **secondary**: 白背景、緑の枠線、緑文字（サブアクション用）
- **gray**: グレー背景、白文字（キャンセル等）

### 使用例

```jsx
// プライマリボタン（デフォルト）
<ActionButton onClick={handleSubmit}>
  購入する
</ActionButton>

// セカンダリボタン
<ActionButton variant="secondary" onClick={handleBack}>
  買い物を続ける
</ActionButton>

// グレーボタン
<ActionButton variant="gray" onClick={handleCancel}>
  キャンセル
</ActionButton>
```

### スタイル仕様
- サイズ: 260px × 40px
- ボーダー半径: 8px
- ホバー時: 透明度が変化

---

## QuantityButton

数量を増減するためのボタンコンポーネント。

### インポート
```jsx
import QuantityButton from './components/QuantityButton';
```

### Props

| プロパティ | 型 | デフォルト | 説明 |
|----------|------|----------|------|
| quantity | number | - | 現在の数量（必須） |
| onIncrease | function | - | 増加ボタンのクリックハンドラ（必須） |
| onDecrease | function | - | 減少ボタンのクリックハンドラ（必須） |
| minQuantity | number | 1 | 最小値（これ以下では減少ボタンが無効化） |

### 使用例

```jsx
import { useState } from 'react';

function ProductCard() {
  const [quantity, setQuantity] = useState(1);

  return (
    <QuantityButton
      quantity={quantity}
      onIncrease={() => setQuantity(quantity + 1)}
      onDecrease={() => setQuantity(quantity - 1)}
      minQuantity={1}
    />
  );
}
```

### スタイル仕様
- サイズ: 94px × 40px
- ボーダー半径: 8px
- ボタンがdisabled時はグレーアウト
- ホバー時: ライトグリーンの背景

---

## PageTitle

ページの見出しを統一的に表示するコンポーネント。

### インポート
```jsx
import PageTitle from './components/PageTitle';
```

### Props

| プロパティ | 型 | デフォルト | 説明 |
|----------|------|----------|------|
| title | string | - | メインタイトル（h1として表示） |
| subtitle | string | - | サブタイトル（h3として表示） |

### 使用例

```jsx
<PageTitle
  title="カート"
  subtitle="CART"
/>
```

### スタイル仕様
- タイトル: 48px、太字900、Nunitoフォント
- サブタイトル: 20px、緑色、letter-spacing: 1.2em

---

## スタイルのカスタマイズ

各コンポーネントには対応するCSSファイルがあります。プロジェクト全体のスタイルに合わせてカスタマイズする場合は、以下のファイルを編集してください。

- `src/components/ActionButton.css`
- `src/components/QuantityButton.css`
- `src/components/PageTitle.css`

また、グローバルなカラー変数は `src/styles/variables.css` で定義されています。

---

## よくある質問

### Q: ボタンを無効化したい場合は？
A: 標準のHTML属性 `disabled` を使用できます。

```jsx
<ActionButton onClick={handleSubmit} disabled={!isFormValid}>
  送信
</ActionButton>
```

### Q: カスタムスタイルを追加したい場合は？
A: `className` propを使用して追加のCSSクラスを適用できます。

```jsx
<ActionButton className="my-custom-button" onClick={handleClick}>
  クリック
</ActionButton>
```

### Q: ボタンやコンポーネントの幅を調整したい場合は？
A: `className` propでカスタムクラスを追加し、CSSで幅を上書きできます。

```jsx
// コンポーネント
<ActionButton className="wide-button" onClick={handleClick}>
  送信
</ActionButton>

// CSS
.wide-button {
  width: 400px; /* デフォルトの260pxから変更 */
}

// または inline style を使用
<ActionButton style={{ width: '100%' }} onClick={handleClick}>
  送信
</ActionButton>
```

### Q: ボタンやコンポーネントの色を変更したい場合は？
A: `className` propでカスタムクラスを追加し、CSSで色を上書きできます。

```jsx
// コンポーネント
<ActionButton className="custom-color-button" onClick={handleClick}>
  特別なアクション
</ActionButton>

// CSS
.custom-color-button {
  background-color: #FF6B6B; /* 背景色 */
  color: white; /* 文字色 */
  border-color: #FF6B6B; /* ボーダー色 */
}

.custom-color-button:hover {
  background-color: #FF5252; /* ホバー時の背景色 */
}

// または inline style を使用
<ActionButton
  style={{ backgroundColor: '#FF6B6B', color: 'white' }}
  onClick={handleClick}
>
  特別なアクション
</ActionButton>
```

プロジェクトで定義されているカラー変数を使用する場合：

```css
.custom-color-button {
  background-color: var(--color-yellow); /* src/styles/variables.css で定義 */
  color: var(--color-green);
}
```

---

## サポート

質問や問題がある場合は、開発チームまでお問い合わせください。

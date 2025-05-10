<div id="top"></div>

## 使用技術一覧

### マークアップ言語

<p style="display: inline">
    <img src="https://img.shields.io/badge/-HTML-white?style=for-the-badge&logo=html5&logoColor=#E34F26">
    <img src="https://img.shields.io/badge/-CSS-grey?style=for-the-badge&logo=css&logoColor=#663399">
</p>

### フロントエンドフレームワーク

<p style="display: inline">
    <img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
</p>

### フロントエンド言語

<p style="display: inline">
    <img src="https://img.shields.io/badge/-JavaScript-20232A?style=for-the-badge&logo=javascript&logoColor=#F7DF1E">
</p>

## ブランチについて

作品全体は`main`ブランチで管理します<br>
`main`からブランチを切って作業しましょう<br>

### ブランチの命名規則

`feature/名前/何をするか`<br>
例）README.md の作成 `feature/name/create-readme`

### コミットメッセージの書き方

強制ではないですが、こんな感じに書くとまとまります<br>
| commit | 内容 |
| ---- | ---- |
| fix | バグ修正 |
| add | 新規（ファイル）機能追加
| update | 機能修正（バグではない）
| remove | 削除 |

例）ヘッダーの作成 `add/ヘッダーの作成`

引用資料：[Git のコミットメッセージの書き方](https://qiita.com/itosho/items/9565c6ad2ffc24c09364)

## プルリクエストについて

自分が作ったものに修正点がないかほかの人に確認を依頼します<br>

### PR のコメントとほしいもの

- どんなことを実装したか（画像添付あるととても親切）

#### 以下は今回はなくてよい

- テストケース
- 技術要件

### レビューするときの手順

#### 確認用コマンド

1. リポジトリのクローン<br>`git clone -b {該当ブランチ} https://github.com/miyaTb/sponmu`
2. 作業ディレクトリへ移動
3. 必要なパッケージのインストール<br>`npm ci`
4. 開発サーバーの起動<br>`npm start`

<br>
<br>
以下もとからあった内容です
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

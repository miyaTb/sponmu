import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import HotItems from "../components/HotItems";
import CardSlider from "../components/CardSlider";
import NewsList from "../components/NewsList";

import "../App.css";

import mainvisual from "../assets/mainvisual.png";
import commitment01 from "../assets/commitment01.png";
import commitment02 from "../assets/commitment02.png";
import logo from "../assets/looplogo.png";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-mainvisual">
          <img
            src={mainvisual}
            alt="メインビジュアル"
            className="hero-image"
          ></img>
          <p className="hero-image-text">
            <span>自然の恵みを</span>
            <br />
            <span>余すことなく</span>
            <br />
            <span>あなたの元へ</span>
          </p>
        </div>
        <p className="hero-description">
          私たちは、北海道の大自然の中で、牛たちに愛情を注げながら育て、
          <br />
          その恵みをまっすぐに、あなたの食卓へ届けることにこだわっています。
          <br />
          無添加でシンプル。だけど濃厚で、やさしい味わい。
          <br />
          毎日をちょっと整えたい。そんなあなたの”はじめの一歩”に寄り添いたい。
          <br />
          Sponmuは、忙しい毎日の中でも、自然と健康を楽しむ時間を提案します。
        </p>
      </section>

      <section className="hot-items">
        <SectionTitle title="HOT ITEMS" subtitle="人気商品" />
        <HotItems />
        <Button link="column" variant="btnGreen" />
      </section>

      <section className="commitment">
        <SectionTitle title="COMMITMENT" subtitle="こだわり" align="left" />
        <section className="commitment-container commitment-left">
          <div className="commitment-text">
            <h3 className="commitment-title">
              自然の恵を
              <br />
              最大限に生かして
            </h3>
            <p className="commitment-description">
              北海道の広大な自然の中、季節のリズムに寄り添いながら牛たちはのびのびと暮らしています。
              <br />
              私たちは、その生命のサイクルを尊重し、無理のない飼育と、科学的な添加物を一切使わない製法にこだわっています。
              <br />
              自然の力だけで引き出したコクとまろやかさが、毎日の体にやさしく染みわたります。
            </p>
          </div>
          <div className="commitment-image image-right">
            <img src={commitment01} alt="自然"></img>
          </div>
        </section>
        <section className="commitment-container commitent-right">
          <div className="commitment-image image-left">
            <img src={commitment02} alt="食卓"></img>
          </div>
          <div className="commitment-text">
            <h3 className="commitment-title">
              新鮮さをそのまま、
              <br />
              食卓へ。
            </h3>
            <p className="commitment-description">
              搾乳から加工まで、すべてを自社牧場で一貫して行うことで、鮮度を最大限にキープ。
              <br />
              加熱処理を最低限に抑えた製法により、牛乳本来の甘みや香りがしっかりと生きています。
              <br />
              EC限定でお届けするからこそ、できたての味わいを逃すことなく、あなたのもとへお届けできます。
            </p>
          </div>
        </section>
      </section>

      <section className="loop-logo">
        <div className="logo-track">
          <img className="logo-image" src={logo} alt="ロゴ" />
          <img className="logo-image" src={logo} alt="ロゴ" />
          <img className="logo-image" src={logo} alt="ロゴ" />
        </div>
      </section>

      <section className="recipe">
        <SectionTitle title="RECIPE" subtitle="おすすめの食べ方" />
        <div className="card-list">
          <CardSlider />
        </div>
        <Button variant="btnGreen" />
      </section>

      <section className="news">
        <SectionTitle title="NEWS" subtitle="お知らせ" />
        <div className="news-container">
          <NewsList />
          <Button link="column" variant="btnYellow" />
        </div>
      </section>
    </div>
  );
}

export default Home;

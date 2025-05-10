import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import Card from "../components/Card";
// import NewsHeading from "../components/NewsHeading";
import NewsList from "../components/NewsList";

import "../App.css";

function Home() {
  return (
    <div>
      <section className="hero">
        <h2 className="hero-title">私たちは</h2>
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

      <section className="ranking">
        <SectionTitle title="RANKING" subtitle="人気商品" />
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
            <img src="" alt="自然"></img>
          </div>
        </section>
        <section className="commitment-container commitent-right">
          <div className="commitment-image image-left">
            <img src="" alt="食卓"></img>
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

      <section className="recipe">
        <SectionTitle title="RECIPE" subtitle="おすすめの食べ方" />
        <div className="card-list">
          <Card
            image="aaa"
            title="レモンヨーグルト"
            description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          />
          <Card
            image="aaa"
            title="レモンヨーグルト"
            description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          />
          <Card
            image="aaa"
            title="レモンヨーグルト"
            description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          />
        </div>
        <Button variant="btnWhite" />
      </section>

      <section className="news">
        <SectionTitle title="NEWS" subtitle="お知らせ" />
        <div>
          {/* <NewsHeading title="テキストテキスト" date="2024.01.12"></NewsHeading> */}
          <NewsList />
          <Button variant="btnYellow" />
        </div>
      </section>
    </div>
  );
}

export default Home;

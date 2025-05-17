import React, { useState } from 'react';
import './css/CartForm.css';

const CartForm = () => {
    const [zipcode, setZipcode] = useState('');
    const [prefecture, setPrefecture] = useState('');
    const [city, setCity] = useState('');
    const [town, setTown] = useState('');
    const [error, setError] = useState('');
    const [showPaymentOptions, setShowPaymentOptions] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState('');

    const prefectures = [
        '', '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
        '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
        '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県',
        '岐阜県', '静岡県', '愛知県', '三重県',
        '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県',
        '鳥取県', '島根県', '岡山県', '広島県', '山口県',
        '徳島県', '香川県', '愛媛県', '高知県',
        '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
    ];

    const handleZipSearch = async () => {
        const cleanZip = zipcode.replace('-', '').trim();
        if (/^[0-9]{7}$/.test(cleanZip)) {
        try {
            const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${cleanZip}`);
            const data = await res.json();
            if (data.results) {
            const { address1, address2, address3 } = data.results[0];
            setPrefecture(address1);
            setCity(address2);
            setTown(address3);
            setError('');
            } else {
            setError('住所が見つかりませんでした');
            setPrefecture('');
            setCity('');
            setTown('');
            }
        } catch {
            setError('通信エラーが発生しました');
            setPrefecture('');
            setCity('');
            setTown('');
        }
        } else {
        setError('7桁の郵便番号を入力してください');
        }
    };

    const handlePaymentToggle = () => {
        setShowPaymentOptions(!showPaymentOptions);
    };

    return (
        <div className="cart-form">
        <div className="cart-form__main">
            <h1 className="cart-form__title">CART</h1>
            <p className="cart-form__subtitle">購入</p>
            <form className="cart-form__form">
            <label className="cart-form__label">メールアドレス
                <input className="cart-form__input" type="email" placeholder="メールアドレスaaa@aaa.aa" />
            </label>

            <fieldset className="cart-form__fieldset">
                <legend className="cart-form__legend">購入者</legend>

                <label className="cart-form__label">お名前
                <input className="cart-form__input" type="text" placeholder="例：田中 太郎" />
                </label>
                <label className="cart-form__label">フリガナ
                <input className="cart-form__input" type="text" placeholder="例：タナカ タロウ" />
                </label>

                <label className="cart-form__label">郵便番号
                <div className="cart-form__zipcode-group">
                    <input
                    className="cart-form__input cart-form__input--zipcode"
                    type="text"
                    placeholder="例：111-1111"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    />
                    <button
                    className="cart-form__button cart-form__button--search"
                    type="button"
                    onClick={handleZipSearch}
                    >検索</button>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                </label>

                <label className="cart-form__label">都道府県
                <select
                    className="cart-form__select"
                    value={prefecture}
                    onChange={(e) => setPrefecture(e.target.value)}
                >
                    {prefectures.map((pref, i) => (
                    <option key={i} value={pref}>{pref || '選択してください'}</option>
                    ))}
                </select>
                </label>

                <label className="cart-form__label">市区町村・番地
                <input
                    className="cart-form__input"
                    value={city + town}
                    onChange={(e) => {
                    setCity(e.target.value);
                    setTown('');
                    }}
                />
                </label>

                <label className="cart-form__label">建物名・部屋
                <input className="cart-form__input" type="text" placeholder="例：テキスト" />
                </label>
                <label className="cart-form__label">電話番号
                <input className="cart-form__input" type="text" placeholder="例：テキスト" />
                </label>
            </fieldset>

            <label className="cart-form__label">配送希望日
                <select className="cart-form__select">
                <option>希望を指定なし</option>
                </select>
            </label>

            <fieldset className="cart-form__fieldset">
                <legend className="cart-form__legend">お支払い情報の入力</legend>

                <div className="cart-form__payment-toggle" onClick={handlePaymentToggle}>
                {selectedPayment || 'お支払い方法を選択'}
                </div>

                {showPaymentOptions && (
                <div className="cart-form__payment-options">
                    <label className="cart-form__radio">
                    <input
                        type="radio"
                        name="payment"
                        checked={selectedPayment === 'コンビニ振込'}
                        onChange={() => setSelectedPayment('コンビニ振込')}
                    /> コンビニ振込
                    </label>
                    <label className="cart-form__radio">
                    <input
                        type="radio"
                        name="payment"
                        checked={selectedPayment === 'クレジットカード'}
                        onChange={() => setSelectedPayment('クレジットカード')}
                    /> クレジットカード
                    </label>
                </div>
                )}
            </fieldset>

            <button className="cart-form__submit" type="submit">注文を確定する</button>
            </form>
        </div>

        <div className="cart-form__sidebar">
            <div className="cart-form__item-list">
            {[1, 2].map((item) => (
                <div key={item} className="cart-form__item">
                <div className="cart-form__item-image" />
                <div>
                    <p className="cart-form__item-name">テキストテキスト</p>
                    <p className="cart-form__item-price">¥0,000(税込)</p>
                </div>
                </div>
            ))}
            </div>

            <div className="cart-form__coupon">
            <input className="cart-form__input" type="text" placeholder="クーポンコード" />
            <button className="cart-form__button">適用</button>
            </div>

            <div className="cart-form__summary">
            <p>小計金額　¥0,000</p>
            <p>配送料　　¥000</p>
            <h2>合計　¥0,000（税込）</h2>
            <p className="cart-form__note">（内消費税：¥000円）</p>
            </div>
        </div>
        </div>
    );
};

export default CartForm;

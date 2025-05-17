import React from 'react';
import './css/Cart.css';

const CartItem = ({ name, price, taxIncludedPrice }) => (
    <div className="cart-item">
        <div className="cart-item__content">
        <div className="cart-item__image" />
        <div className="cart-item__details">
            <h2 className="cart-item__name">{name}</h2>
            <p className="cart-item__price">
            ¥{price} <span className="cart-item__price--tax">税込{taxIncludedPrice}円</span>
            </p>
        </div>
        <div className="cart-item__actions">
            <button className="cart-item__button">+1</button>
            <div>
            <button className="cart-item__remove">商品を削除する</button>
            </div>
        </div>
        </div>
    </div>
);

const RecentlyViewed = () => (
    <div className="recently-viewed">
        <h3 className="recently-viewed__title">最近見た商品</h3>
        <div className="recently-viewed__list">
        {[1, 2].map((item) => (
            <div key={item} className="recently-viewed__item">
            <div className="recently-viewed__image" />
            <p className="recently-viewed__name">テキスト</p>
            <p className="recently-viewed__price">¥0,000(税込)</p>
            </div>
        ))}
        </div>
    </div>
);

const CartSummary = () => (
    <div className="cart-summary">
        <p className="cart-summary__label">合計</p>
        <h2 className="cart-summary__total">¥0,000（税込）</h2>
        <p className="cart-summary__note">テキストテキストテキスト</p>
        <button className="cart-summary__button">ご購入手続きへ</button>
    </div>
);

const Cart = () => {
    return (
        <div className="cart">
            <h1 className="cart__title">CART</h1>
            <p className="cart__subtitle">購入</p>
            <div className="cart__content">
                <div className="cart__items">
                    <CartItem name="しぼりたて生乳ヨーグルト" price="000" taxIncludedPrice="000" />
                    <CartItem name="牧場の朝ミルク" price="000" taxIncludedPrice="000" />
                    <RecentlyViewed />
                </div>
                <div className="cart__summary">
                    <CartSummary />
                </div>
            </div>
        </div>
    );
};

export default Cart;
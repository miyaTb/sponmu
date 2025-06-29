import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './css/Cart.css';

const CartItem = ({ id, name, taxIncludedPrice, quantity, onQuantityChange, onRemove }) => (
    <div className="cart-item">
        <div className="cart-item__content">
        <div className="cart-item__image" />
        <div className="cart-item__details">
            <h2 className="cart-item__name">{name}</h2>
            <p className="cart-item__price">
            ¥{taxIncludedPrice.toLocaleString()}(税込)
            </p>
        </div>
        <div className="cart-item__actions">
            <div className="cart-item__button">
                <button 
                    className="cart-item__quantity-btn" 
                    onClick={() => onQuantityChange(id, quantity - 1)}
                    disabled={quantity <= 1}
                >
                    -
                </button>
                <span className="cart-item__quantity-display">{quantity}</span>
                <button 
                    className="cart-item__quantity-btn" 
                    onClick={() => onQuantityChange(id, quantity + 1)}
                >
                    +
                </button>
            </div>
            <div>
            <button className="cart-item__remove" onClick={() => onRemove(id)}>商品を削除する</button>
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

const CartSummary = ({ total, onCheckout }) => (
    <div className="cart-summary">
        <div className="cart-summary__header">
            <p className="cart-summary__label">合計</p>
            <h2 className="cart-summary__total">¥{total.toLocaleString()}（税込）</h2>
        </div>
        <div className="cart-summary__center">
            <p className="cart-summary__note">送料は地域により異なります</p>
            <button className="cart-summary__button" onClick={onCheckout}>ご購入手続きへ</button>
        </div>
    </div>
);

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, handleQuantityChange, handleRemoveItem, calculateTotal } = useCart();

    const handleCheckout = () => {
        navigate('/cart/form');
    };

    if (cartItems.length === 0) {
        return (
            <div className="cart">
                <h1 className="cart__title">CART</h1>
                <p className="cart__subtitle">購入</p>
                <div className="cart__empty">
                    <p>カートに商品がありません</p>
                </div>
            </div>
        );
    }

    return (
        <div className="cart">
            <h1 className="cart__title">CART</h1>
            <p className="cart__subtitle">購入</p>
            <div className="cart__content">
                <div className="cart__items">
                    {cartItems.map(item => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            taxIncludedPrice={item.taxIncludedPrice}
                            quantity={item.quantity}
                            onQuantityChange={handleQuantityChange}
                            onRemove={handleRemoveItem}
                        />
                    ))}
                    <RecentlyViewed />
                </div>
                <div className="cart__summary">
                    <CartSummary total={calculateTotal()} onCheckout={handleCheckout} />
                </div>
            </div>
        </div>
    );
};

export default Cart;
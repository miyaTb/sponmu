import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './css/Cart.css';

const CartItem = ({ id, name,englishName, taxIncludedPrice, quantity, imageUrl, onQuantityChange, onRemove }) => (
    <div className="cart-item">
        <div className="cart-item__content">
        <div className="cart-item__image">
            <img src={imageUrl} alt={name} />
        </div>
        <div className="cart-item__details">
            <h2 className="cart-item__name">{name}</h2>
            <h3 className='cart-item__english-name'>{englishName}</h3>
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

const CartActions = ({ onContinueShopping, onClearCart }) => (
    <div className="cart__actions">
        <button className="cart__continue-shopping" onClick={onContinueShopping}>
            買い物を続ける
        </button>
        <button className="cart__clear" onClick={onClearCart}>
            カートの中身を空にする
        </button>
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
    const { cartItems, handleQuantityChange, handleRemoveItem, calculateTotal, clearCart } = useCart();

    const handleCheckout = () => {
        navigate('/cart/form');
    };

    const handleContinueShopping = () => {
        navigate('/');
    };

    const handleClearCart = () => {
        if (window.confirm('カートの中身を全て削除してもよろしいですか？')) {
            clearCart();
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="cart">
                <h1 className="cart__title">CART</h1>
                <p className="cart__subtitle">購入</p>
                <div className="cart__empty">
                    <h2>買い物かごに商品が入っていません。</h2>
                    <p>現在、買い物かごに商品が入っていません。<br />お買い物を続けるには下の 「お買い物を続ける」 をクリックしてください。</p>
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
                            englishName={item.englishName}
                            taxIncludedPrice={item.taxIncludedPrice}
                            quantity={item.quantity}
                            imageUrl={item.imageUrl}
                            onQuantityChange={handleQuantityChange}
                            onRemove={handleRemoveItem}
                        />
                    ))}
                    <CartActions
                        onContinueShopping={handleContinueShopping}
                        onClearCart={handleClearCart}
                    />
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
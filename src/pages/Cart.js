import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useRecentlyViewed } from '../context/RecentlyViewedContext';
import useProducts from '../hooks/productBox';
import './css/Cart.css';
import ActionButton from '../components/ActionButton';
import PageTitle from '../components/PageTitle';
import QuantityButton from '../components/QuantityButton';

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
                <QuantityButton
                    quantity={quantity}
                    onIncrease={() => onQuantityChange(id, quantity + 1)}
                    onDecrease={() => onQuantityChange(id, quantity - 1)}
                    minQuantity={1}
                />
            </div>
            <div>
            <button className="cart-item__remove" onClick={() => onRemove(id)}>削除</button>
            </div>
        </div>  
        </div>
    </div>
);

const RecentlyViewed = () => {
    const { viewedIds } = useRecentlyViewed();
    const { products } = useProducts();

    const viewedProducts = viewedIds
        .map(id => products.find(p => p.id === id))
        .filter(Boolean);

    if (viewedProducts.length === 0) return null;

    return (
        <div className="recently-viewed">
            <h3 className="recently-viewed__title">最近見た商品</h3>
            <div className="recently-viewed__list">
            {viewedProducts.map((product) => (
                <Link key={product.id} to={`/products/${product.id}`} className="recently-viewed__item">
                <div className="recently-viewed__image">
                    <img src={product.imageUrl} alt={product.name.replace(/<br\s*\/?>/g, '')} />
                </div>
                <p className="recently-viewed__name">{product.name.replace(/<br\s*\/?>/g, '')}</p>
                <p className="recently-viewed__price">¥{product.price.toLocaleString()}(税込)</p>
                </Link>
            ))}
            </div>
        </div>
    );
};

const CartActions = ({ onContinueShopping, onClearCart }) => (
    <div className="cart__actions">
        <ActionButton  onClick={onContinueShopping}>
            買い物を続ける
        </ActionButton>
        <ActionButton variant="gray"  onClick={onClearCart}>
            カートの中身を空にする
        </ActionButton>
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
            <ActionButton onClick={onCheckout}>
                ご購入手続きへ
            </ActionButton>
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
                <div className="cart__empty">
                    <h2>買い物かごに商品が入っていません。</h2>
                    <p>現在、買い物かごに商品が入っていません。<br />お買い物を続けるには下の 「お買い物を続ける」 をクリックしてください。</p>
                </div>
                <ActionButton  onClick={handleContinueShopping}>
                    買い物を続ける
                </ActionButton>
                <RecentlyViewed />
            </div>
        );
    }

    return (
        <div className="cart">
            <PageTitle
            title="CART"
            subtitle="購入"
            />
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
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ActionButton from './ActionButton';
import QuantityButton from './QuantityButton';
import '../../src/App.css';

function ProductDetail({ id, imageUrl,englishName, title, catchcopy, description, price, priceValue, material, amount, method, date, arerugen }) {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart({
            id,
            name: title.replace(/<br\s*\/?>/gi, ' '),
            englishName,
            price: priceValue,
            imageUrl
        }, quantity);
        navigate('/cart');
    };
    return (
            <div className='Product'>
                <div className='ProductLeft'>
                    <img src={imageUrl} alt={title}/>
                    <div className='ProductImage'>
                        <img src={imageUrl} alt=""/>
                        <img src={imageUrl} alt=""/>
                    </div>
                    <p className='ProductInfo'>
                        <span>■ 商品情報</span>
                        <span>{material}</span>
                        <span>{amount}</span>
                        <span>{method}</span>
                        <span>{date}</span>
                        <span>{arerugen}</span>
                    </p>
                    <div className='ProductRecipe'>
                        <h3>おすすめの食べ方</h3>
                        <div className='recipeMenu'>
                            <img src={imageUrl} alt=""/>
                            <img src={imageUrl} alt=""/>
                        </div>
                    </div>
                </div>
                <div className='ProductRight'>
                    <div className='ProductMain'>
                        <h2 dangerouslySetInnerHTML={{ __html: title }} />
                        <h3 className='ProductEnglishName'>{englishName}</h3>
                        <p className='ProductPrice'>{price}</p>
                        <div className='ProductButton'>
                            <QuantityButton
                                quantity={quantity}
                                onIncrease={() => setQuantity(q => q + 1)}
                                onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
                                minQuantity={1}
                            />
                            <ActionButton variant="primary" onClick={handleAddToCart}>
                                カートに入れる
                            </ActionButton>
                        </div>
                        <div className='FreeShipping'>
                            <p>3,000円以上のご購入で送料無料</p>
                            <a href="">送料・返品について</a>
                        </div>
                        <p>

                        </p>
                    </div>
                    <div className='ProductText'>
                        <h3 dangerouslySetInnerHTML={{ __html: catchcopy }} />
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                </div>
            </div>
      );
    };

export default ProductDetail;
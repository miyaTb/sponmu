import React from 'react';
import '../../src/App.css';

function ProductDetail({ imageUrl, title, catchcopy, description ,price, material,amount,method,date,arerugen, onClick }) {
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
                        <p className='ProductPrice'>{price}</p>
                        <div className='ProductButton'>
                            <button>+1</button>
                            <button>カートに入れる</button>
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
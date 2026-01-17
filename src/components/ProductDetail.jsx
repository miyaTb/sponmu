import  { useState } from 'react';
import '../pages/css/Product.css'

function ProductDetail({ imageUrl, subImageUrl1, subtitle, title, catchcopy, description ,price, material,amount,method,date,arerugen, onClick }) {
    const [mainImage, setMainImage] = useState(imageUrl);
    return (
            <div className='Product'>
                <div className='ProductLeft'>
                    <img src={mainImage} alt={title}/>
                    <div className='ProductImage'>
                        <img src={imageUrl} alt=""
                        onMouseEnter={() => setMainImage(imageUrl)} 
                        onClick={() => setMainImage(imageUrl)} 
                        />
                        <img src={subImageUrl1} alt=""
                        onMouseEnter={() => setMainImage(subImageUrl1)} 
                        onClick={() => setMainImage(subImageUrl1)} 
                        />
                        <img src={subImageUrl1} alt=""
                        onMouseEnter={() => setMainImage(subImageUrl1)} 
                        onClick={() => setMainImage(subImageUrl1)} 
                        />
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
                        <h2>おすすめの食べ方</h2>
                        <div className='recipeMenu'>
                            <a href=""><img src={imageUrl} alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className='ProductRight'>
                    <div className='ProductMain'>
                        <h1 dangerouslySetInnerHTML={{ __html: title }} className="product-title"/>
                        <h3 dangerouslySetInnerHTML={{ __html: subtitle }} className='productSubtitle'/>
                        <span className='ProductPrice'>{price}</span>
                        <div className='ProductButton'>
                            <div>
                                <button>+</button>
                                <span>0</span>
                                <button>-</button>
                            </div>
                            <button className='cartBtn'>カートに入れる</button>
                        </div>
                        <div className='FreeShipping'>
                            <a href="">3,000円以上のご購入で送料無料</a>
                            <a href="">送料・返品について</a>
                        </div>
                        <p>

                        </p>
                    </div>
                    <div className='ProductText'>
                        <h2 dangerouslySetInnerHTML={{ __html: catchcopy }} />
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                </div>
            </div>
      );
    };

export default ProductDetail;
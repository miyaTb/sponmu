import React from 'react';
import "../../src/pages/css/Product.css";

function ItemBox({ imageUrl, title, price, onClick }) {
  const cleanTitle = title.replace(/<br\s*\/?>/gi, ' ');

  return (
    <div className='ItemBox' onClick={onClick}>
      <div className='itemImageWrapper'> 
        <img src={imageUrl} alt={cleanTitle} />
      </div>
      <h3 className="product-title">{cleanTitle}</h3>
      <p>{price}</p>
    </div>
  );
}

export default ItemBox;
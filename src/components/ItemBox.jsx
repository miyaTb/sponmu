import React from 'react';
import '../../src/App.css';

function ItemBox({ imageUrl, title, price, onClick }) {
  return (
    <div className='ItemBox'  onClick={onClick}>
      <div className='itemImageWrapper'> 
        <img src={imageUrl} alt={title} />
      </div>
      <h3 className="product-title">{title}</h3>
      <p>{price}</p>
    </div>
  );
}

export default ItemBox;
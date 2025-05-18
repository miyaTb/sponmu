import React from 'react';
import '../../src/App.css';

function ItemBox({ imageUrl, title, price, onClick }) {
  return (
    <div className='ItemBox'  onClick={onClick}>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
}

export default ItemBox;
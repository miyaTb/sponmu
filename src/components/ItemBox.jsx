import React from 'react';
import '../../src/App.css'

function ItemBox({ imageUrl, title, description, onClick }) {
  return (
    <div className='itemBox' onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />}
      <h3 style={{ fontSize:'32px' }}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ItemBox;
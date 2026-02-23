import React from 'react';
import './QuantityButton.css';

const QuantityButton = ({ quantity, onIncrease, onDecrease, minQuantity = 1 }) => {
  return (
    <div className="quantity-button">
      <button
        className="quantity-button__btn"
        onClick={onDecrease}
        disabled={quantity <= minQuantity}
      >
        -
      </button>
      <span className="quantity-button__display">{quantity}</span>
      <button
        className="quantity-button__btn"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;

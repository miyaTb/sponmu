import React from 'react';
import '../../src/App.css';

function RecipeBox({ imageUrl, title, miniutes, kcal, onClick }) {
  return (
    <div className='ItemBox'  onClick={onClick}>
      <div className='itemImageWrapper'> 
        <img src={imageUrl} alt={title} />
      </div>
      <span>{miniutes}</span>
      <span>{kcal}</span>
    </div>
  );
}

export default RecipeBox;
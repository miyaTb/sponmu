import React from 'react';
import '../../src/App.css';

function RecipeBox({ imageUrl, title, miniutes, kcal, onClick }) {
  return (
    <div className='RecipeBox'  onClick={onClick}>
      <div className='itemImageWrapper'> 
        <img src={imageUrl} alt={title} />
      </div>
      <h3 dangerouslySetInnerHTML={{ __html: title }} />      
        <div className='RecipeMiutes'>
        <span>{miniutes}</span>
        <span>{kcal}</span>
      </div>
    </div>
  );
}

export default RecipeBox;
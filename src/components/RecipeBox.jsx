import React from 'react';
import "../pages/css/recipe.css"


function RecipeBox({ imageUrl, name, time, calories, onClick }) {
  return (
    <div className='RecipeBox'  onClick={onClick}>
      <div className='itemImageWrapper'> 
        <img src={require(`../assets/${imageUrl}`)} alt={name} />
      </div>
      <h3 dangerouslySetInnerHTML={{ __html: name }} />      
        <div className='RecipeMiutes'>
        <span>{time}</span>
        <span>{calories}</span>
      </div>
    </div>
  );
}

export default RecipeBox;
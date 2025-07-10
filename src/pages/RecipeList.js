import React from 'react';
import { Link } from 'react-router-dom';
import recipes from '../data/recipes.json';
import RecipeBox from '../components/RecipeBox';

function RecipeListPage() {
  return (
    <div className='ProductItem'>
      {recipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
          <RecipeBox
            id={recipe.id}
            time={recipe.time}
            calories={recipe.calories}
            imageUrl={recipe.imageUrl}
            name={recipe.name}


          />
        </Link>
      ))}
    </div>
  );
}

export default RecipeListPage;
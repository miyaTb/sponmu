import React from 'react';
import { Link } from 'react-router-dom';
import useRecipes from '../hooks/RecipeBox';
import RecipeBox from '../components/RecipeBox';

function RecipeListPage() {
  const { recipes} = useRecipes();

  return (
    <div className='ProductItem'>
      {recipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
          <RecipeBox
            id={recipe.id}
            miniutes={recipe.miniutes}
            kcal={recipe.kcal}
            imageUrl={recipe.imageUrl}
            title={recipe.name}
          />
        </Link>
      ))}
    </div>
  );
}

export default RecipeListPage;
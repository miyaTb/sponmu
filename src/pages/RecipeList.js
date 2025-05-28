import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../hooks/productBox';
import ItemBox from '../components/ItemBox';

function RecipeListPage() {
  const { products } = useProducts();

  return (
    <div className='ProductItem'>
      {products.map((recipe) => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
          <ItemBox
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
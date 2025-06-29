import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Link をインポート
import useRecipes from '../hooks/RecipeBox';
import RecipeDetail from '../components/RecipeDetail'; // ItemBox をインポート

function Recipe() {
    const { id } = useParams();
    const { recipes } = useRecipes();
    const [recipe, setRecipe] = useState(null);
  
    useEffect(() => {
      const foundRecipe = recipes.find((p) => p.id === parseInt(id, 10));
      setRecipe(foundRecipe);
    }, [id, recipes]);
  
    if (!recipe) {
      return <div>Loading...</div>;
    }

  return (
      <div>
      <RecipeDetail
        id={recipe.id}
        imageUrl={recipe.imageUrl}
        title={recipe.name}
        miniutes={recipe.miniutes}
        kcal={recipe.kcal}
        material1={recipe.material1}
        material2={recipe.material2}
        amount1={recipe.amount1}
        amount2={recipe.amount2}
        method1={recipe.method1}
        method2={recipe.method2}
        description={recipe.description}

      />
      </div>
  );
}

export default Recipe;

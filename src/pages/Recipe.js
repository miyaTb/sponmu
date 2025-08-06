import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../data/recipes.json'; 
import RecipeDetail from '../components/RecipeDetail';

function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const foundRecipe = recipes.find((p) => p.id === parseInt(id, 10));
        setRecipe(foundRecipe);
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <RecipeDetail
                id={recipe.id}
                imageUrl={recipe.imageUrl}
                name={recipe.name}
                time={recipe.time}
                calories={recipe.calories}
                ingredients={recipe.ingredients}
                summary={recipe.summary}
                steps={recipe.steps}
            />
        </div>
    );
}

export default Recipe;

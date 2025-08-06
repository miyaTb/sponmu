import React from 'react';
import '../../src/App.css';

function RecipeDetail({ imageUrl, name, summary, ingredients, steps, time, calories }) {
    return (
            <div className='Recipe'>
                <div className='recipeInfo'>
                    <img src={`/assets/${imageUrl}`} alt={name} />
                    <div className='recipeText'>
                        <h2 dangerouslySetInnerHTML={{ __html: name }} />
                        <div dangerouslySetInnerHTML={{ __html: summary }} />
                        <div className='RecipeMiutesDetail'>
                            <span>{time}</span>
                            <span>{calories}</span>
                        </div>
                    </div>
                </div>
                <div className='materialMethod'>
                    <div>
                        <h3>材料</h3>
                       <ul className='recipeMaterial'>
                        {ingredients.map((ingredient, index) => {
                            const parts = ingredient.split(' ');
                            const amount = parts.pop();
                            const name = parts.join(' ');
                        return (
                            <li key={index}>
                                <span className="ingredient-name">{name}</span>
                                <span className="ingredient-amount">{amount}</span>
                            </li>
                        );
                        })}
                    </ul>
                    </div>
                    <div className='Method'>
                        <h3>つくり方</h3>
                        <ol className='recipeMethod'>
                            {steps.map((step, index) => (
                            <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className='useMaterial'>
                    <h3>レシピに使われている商品</h3>
                </div>
            </div>
      );
    };

export default RecipeDetail;
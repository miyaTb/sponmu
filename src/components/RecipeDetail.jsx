import React from 'react';
import '../../src/App.css';

function RecipeDetail({ imageUrl, title, material1, material2, description, amount1, amount2, method1, method2, miniutes, kcal, onClick }) {
    return (
            <div className='Recipe'>
                <div className='recipeInfo'>
                    <img src={imageUrl} alt={title}/>
                    <div className='recipeText'>
                        <h2 dangerouslySetInnerHTML={{ __html: title }} />
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                        <div className='RecipeMiutesDetail'>
                            <span>{miniutes}</span>
                            <span>{kcal}</span>
                        </div>
                    </div>
                </div>
                <div className='materialMethod'>
                    <div>
                        <h3>材料</h3>
                        <div className='recipeMaterial'>
                            <div>
                                <span>{material1}</span>
                                <span>{amount1}</span>
                            </div>
                            <div>
                                <span>{material2}</span>
                                <span>{amount2}</span>
                            </div>
                        </div>
                    </div>
                    <div className='Method'>
                        <h3>つくり方</h3>
                        <div className='recipeMethod'>
                            <span>{method1}</span>
                            <span>{method2}</span>
                        </div>
                    </div>
                </div>
                <div className='useMaterial'>
                    <h3>レシピに使われている商品</h3>
                </div>
            </div>
      );
    };

export default RecipeDetail;
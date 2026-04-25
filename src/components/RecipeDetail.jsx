import React from 'react';
import { Link, useParams } from 'react-router-dom'; // 1. LinkとuseParamsをインポート
import '../../src/App.css';
import productsData from '../data/productBox.json';

// propsに id を追加、もしくはコンポーネント内で取得するようにします
function RecipeDetail({ imageUrl, name, summary, ingredients, steps, time, calories }) {
    // 2. URLからレシピのIDを取得する場合（もしpropsで渡ってこないならこれが必要）
    const { id } = useParams(); 

    // 3. 関連商品のフィルタリング
    // productsData の中の商品の id が、レシピ側で持っている関連商品IDと一致するかチェックします
    // ※レシピデータ側に「関連商品のID」がどう入っているかによってここを微調整します
    const relatedProducts = productsData.filter(product => String(product.id) === String(id));

    return (
        <div className='Recipe'>
            <div className='recipeInfo'>
                <img src={require(`../assets/${imageUrl}`)} alt={name} />
                <div className='recipeText'>
                    <h1 dangerouslySetInnerHTML={{ __html: name }} />
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
                <div className='recipeMenu'>
                    {relatedProducts.map(product => (
                        <div key={product.id} className='recipeItem'>
                            {/* 4. 商品詳細ページ（/product/ID）へ飛ばす */}
                            <Link to={`/product/${product.id}`}>
                                {/* productBox.jsonの画像プロパティ名に合わせて修正 */}
                                <img src={require(`../assets/${product.imageUrl}`)} alt={product.name} />
                                <p>{product.name}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;
import React from 'react';
import { Outlet } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import './css/recipe.css'

function RecipeLayout() {
  return (
    <div className="ProductList">
      <PageTitle title="RECIPE" subtitle="おすすめの食べ方"/>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default RecipeLayout;
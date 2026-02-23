import React from 'react';
import { Outlet } from 'react-router-dom';

function RecipeLayout() {
  return (
    <div className="ProductList">
      <h1>RECIPE<small>おすすめの食べ方</small></h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default RecipeLayout;
import React from 'react';
import { Outlet } from 'react-router-dom';
import PageTitle from '../components/PageTitle';

function ProductLayout() {
  return (
    <div className="ProductList">
      <PageTitle title="PRODUCT" subtitle="商品" />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default ProductLayout;
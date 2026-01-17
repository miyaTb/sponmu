import { Outlet } from 'react-router-dom';
import './css/Product.css'

function ProductLayout() {
  return (
    <div className="ProductList">
      <h2>Product<small>商品一覧</small></h2>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default ProductLayout;
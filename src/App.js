import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Brand from './pages/Brand';
import Column from './pages/Column';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import CartForm from './pages/CartForm';
import OrderComplete from './pages/OrderComplete';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/column" element={<Column />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/form" element={<CartForm />} />
            <Route path="/order/complete" element={<OrderComplete />} />
            {/* 想定外アドレスは NotFound ページへ */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <p>sponmu</p>
      </div>
    </CartProvider>
  );
}

export default App;

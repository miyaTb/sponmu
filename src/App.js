import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Brand from './pages/Brand';
import Column from './pages/Column';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/column" element={<Column />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <p>sponmu</p>
      <Footer />
    </div>
  );
}

export default App;

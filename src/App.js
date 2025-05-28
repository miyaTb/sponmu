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
import ProductLayout from './pages/ProductLayout';
import RecipeList from './pages/RecipeList'
import Recipe from './pages/Recipe';
import RecipeLayout from './pages/RecipeLayout';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductLayout />}>
            <Route index element={<ProductList />} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="/recipes" element={<RecipeLayout />}>
            <Route index element={<RecipeList />} />
            <Route path=":id" element={<Recipe />} />
          </Route>
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

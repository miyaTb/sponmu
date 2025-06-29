import "./App.css";
import "./styles/variables.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Brand from "./pages/Brand";
import Column from "./pages/Column";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/column" element={<Column />} />
          {/* 想定外アドレスは NotFound ページへ */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <p>sponmu</p>
    </div>
  );
}

export default App;

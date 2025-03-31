import { BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import Header from './_component/common/Header';
import Footer from './_component/common/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

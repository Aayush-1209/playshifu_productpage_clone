import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Features from './components/Features/Features';
import ProductGuide from './components/ProductGuide/ProductGuide';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app">
          <Header />
          <Navigation />
          <main>
            <ProductDetails />
            <Features />
            <ProductGuide />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
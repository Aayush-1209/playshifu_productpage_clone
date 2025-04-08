import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { Bell, ShoppingCart, User, Search, ChevronDown, Menu } from 'lucide-react';
import './Header.css';

const Header = () => {
  const { cart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPromo, setShowPromo] = useState(true);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="header-wrapper">
      {showPromo && (
        <div className="promo-banner">
          <div className="promo-banner-content">
            <span className="promo-item">🎉 Never-before offers - Upto 25% OFF! 🎉</span>
            <span className="promo-item">🚚 Free shipping on orders above $50</span>
            <span className="promo-item">🎁 Use code WELCOME15 for extra 15% off</span>
          </div>
          <button 
            className="promo-close-btn"
            onClick={() => setShowPromo(false)}
            aria-label="Close promotion banner"
          >
            &times;
          </button>
        </div>
      )}
      
      <header className={`header-main ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container">
          <div className="header-container">
            <div className="header-left">
              <button className="btn menu-btn d-md-none">
                <Menu size={20} />
              </button>
              
              <div className="country-selector">
                <button className="btn dropdown-toggle country-btn" type="button" id="countryDropdown">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" 
                    alt="India" 
                    className="country-flag" 
                  />
                  <ChevronDown size={16} className="dropdown-icon" />
                </button>
              </div>
            </div>

            <div className="header-center">
              <a href="/" className="navbar-brand logo-container">
                <img 
                  src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fbrand%2Fplayshifu-logo.webp&w=1080&q=75" 
                  alt="PlayShifu Logo" 
                  className="logo"
                />
              </a>
            </div>

            <div className="header-right">
              <button className="btn header-action-btn">
                <Search size={20} className="header-icon" />
              </button>
              
              <button className="btn header-action-btn notification-btn">
                <Bell size={20} className="header-icon" />
                <span className="notification-dot"></span>
              </button>
              
              <button className="btn header-action-btn cart-btn">
                <ShoppingCart size={20} className="header-icon" />
                {cart.length > 0 && (
                  <span className="cart-badge pulse">{cart.length}</span>
                )}
              </button>
              
              <button className="btn header-action-btn user-btn">
                <User size={20} className="header-icon" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
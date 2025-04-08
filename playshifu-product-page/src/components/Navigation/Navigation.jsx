import { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  
  const categoryItems = [
    { name: "Board Games", count: 124 },
    { name: "Puzzles", count: 87 },
    { name: "Learning Toys", count: 63 },
    { name: "Outdoor Toys", count: 42 },
    { name: "Plush Toys", count: 31 }
  ];
  
  const ageItems = [
    { name: "0-2 Years", count: 45 },
    { name: "3-5 Years", count: 72 },
    { name: "6-8 Years", count: 68 },
    { name: "9-12 Years", count: 54 },
    { name: "12+ Years", count: 37 }
  ];

  return (
    <nav className="nav-menu">
      <div className="container">
        <button 
          className="mobile-nav-toggle d-md-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        
        <div className={`row text-center ${isMenuOpen ? '' : 'collapsed d-md-flex'}`}>
          <div className="col">
            <div className={`dropdown ${activeDropdown === 0 ? 'show' : ''}`}>
              <button 
                className="btn dropdown-toggle menu-animation" 
                onClick={() => toggleDropdown(0)}
              >
                <i className="fas fa-th-large me-2"></i>
                Shop By Category
              </button>
              
              {activeDropdown === 0 && (
                <div className="dropdown-menu show">
                  {categoryItems.map((item, index) => (
                    <a key={index} className="dropdown-item" href="#">
                      {item.name}
                      <span className="ms-2 badge rounded-pill bg-light text-dark">{item.count}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="col">
            <div className={`dropdown ${activeDropdown === 1 ? 'show' : ''}`}>
              <button 
                className="btn dropdown-toggle menu-animation" 
                onClick={() => toggleDropdown(1)}
              >
                <i className="fas fa-child me-2"></i>
                Shop By Age
              </button>
              
              {activeDropdown === 1 && (
                <div className="dropdown-menu show">
                  {ageItems.map((item, index) => (
                    <a key={index} className="dropdown-item" href="#">
                      {item.name}
                      <span className="ms-2 badge rounded-pill bg-light text-dark">{item.count}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="col">
            <a href="#" className="btn highlight shine-effect menu-animation">
              <i className="fas fa-bolt me-2"></i>
              Super Saver Deals
            </a>
          </div>
          
          <div className="col">
            <a href="#" className="btn menu-animation">
              <i className="fas fa-gift me-2"></i>
              Birthday Gifts
            </a>
          </div>
          
          <div className="col">
            <a href="#" className="btn shine-effect menu-animation">
              <i className="fas fa-shopping-bag me-2"></i>
              Shop All
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
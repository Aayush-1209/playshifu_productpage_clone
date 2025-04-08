import { useState, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Send, MessageSquare } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footer');
      if (footer) {
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (footerPosition < windowHeight * 0.9) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    setEmail('');
  };

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <div className="highlight-section">
        <div className="highlight-box">
          <div className="highlight-icon">👪</div>
          <div className="highlight-content">
            <div className="highlight-label">Trusted by</div>
            <div className="highlight-value">2M+ Parents &<br/>Educators</div>
          </div>
        </div>
        
        <div className="highlight-box">
          <div className="highlight-icon">🌍</div>
          <div className="highlight-content">
            <div className="highlight-label">Available in</div>
            <div className="highlight-value">35+ Countries &<br/>Counting</div>
          </div>
        </div>
        
        <div className="highlight-box">
          <div className="highlight-icon">🎮</div>
          <div className="highlight-content">
            <div className="highlight-label">Educational Toys</div>
            <div className="highlight-value">20+ Products</div>
          </div>
        </div>
      </div>

      <div className="icon-row">
        <div className="feature-item">
          <div className="feature-icon">🚚</div>
          <div className="feature-text">Free Shipping</div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">↩️</div>
          <div className="feature-text">30 Days Return</div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🛡️</div>
          <div className="feature-text">6 Months Warranty</div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔐</div>
          <div className="feature-text">Secure Checkout</div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="footer-content">
        <div className="footer-left">
          <h4 className="newsletter-title">Stay Updated</h4>
          <p className="footer-text">
            Get notified of new launches, product updates, contests, and more exciting news!
          </p>
          
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="submit-btn">
                <Send size={16} />
              </button>
            </div>
          </form>
          
          <button className="whatsapp-box">
            <MessageSquare size={18} />
            Join our WhatsApp Community
          </button>
        </div>

        <div className="footer-links">
          <div className="footer-links-column">
            <h6>Shop</h6>
            <FooterLinks links={shopLinks} />
          </div>

          <div className="footer-links-column">
            <h6>More</h6>
            <FooterLinks links={moreLinks} />
          </div>

          <div className="footer-links-column">
            <h6>Support</h6>
            <FooterLinks links={supportLinks} />
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <SocialIcons />
        <p className="copyright">© 2025 PlayShifu.com</p>
        <PaymentIcons />
      </div>
    </footer>
  );
};

const FooterLinks = ({ links }) => (
  <div className="footer-links-list">
    {links.map((link, index) => (
      <a 
        key={index} 
        href={link.url} 
        className="footer-link"
      >
        {link.text}
      </a>
    ))}
  </div>
);

const SocialIcons = () => (
  <div className="social-icons">
    <a href="#" className="social-icon" aria-label="Facebook">
      <Facebook size={20} />
    </a>
    <a href="#" className="social-icon" aria-label="LinkedIn">
      <Linkedin size={20} />
    </a>
    <a href="#" className="social-icon" aria-label="Instagram">
      <Instagram size={20} />
    </a>
    <a href="#" className="social-icon" aria-label="YouTube">
      <Youtube size={20} />
    </a>
  </div>
);

const PaymentIcons = () => {
  const paymentMethods = [
    { name: "Apple Pay", icon: "https://img.icons8.com/color/48/apple-pay.png" },
    { name: "MasterCard", icon: "https://img.icons8.com/color/48/mastercard-logo.png" },
    { name: "Visa", icon: "https://img.icons8.com/color/48/visa.png" },
    { name: "Google Pay", icon: "https://img.icons8.com/color/48/google-pay-india.png" }
  ];

  return (
    <div className="payment-icons">
      {paymentMethods.map((method, index) => (
        <div key={index} className="payment-icon">
          <img src={method.icon} alt={method.name} />
        </div>
      ))}
    </div>
  );
};

const shopLinks = [
  { text: 'Problem Solving Toys', url: '#' },
  { text: 'STEM Toys', url: '#' },
  { text: 'Social & Emotional Development', url: '#' },
  { text: 'Birthday Gift Toys', url: '#' },
  { text: 'Super Saver Deals', url: '#' },
  { text: 'Best Seller Toys', url: '#' }
];

const moreLinks = [
  { text: 'Device Compatibility', url: '#' },
  { text: 'Free E-Books', url: '#' },
  { text: 'Parent Hub', url: '#' },
  { text: 'Blogs', url: '#' },
  { text: 'About Us', url: '#' }
];

const supportLinks = [
  { text: 'Contact Us', url: '#' },
  { text: 'Privacy Policy', url: '#' },
  { text: 'Return Policy', url: '#' },
  { text: 'Terms & Conditions', url: '#' },
  { text: 'FAQs', url: '#' }
];

export default Footer;
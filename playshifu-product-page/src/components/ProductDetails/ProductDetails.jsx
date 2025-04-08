import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { getProducts } from '../../services/api';
import './ProductDetails.css';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setSelectedProduct(data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return (
    <div className="loading-container">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="ms-3">Loading products...</span>
    </div>
  );
  
  if (!selectedProduct) return (
    <div className="container mt-5 text-center">
      <div className="alert alert-warning" role="alert">
        No product found. Please try again later.
      </div>
    </div>
  );

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <ProductImages product={selectedProduct} />
        </div>
        <div className="col-lg-6">
          <ProductInfo 
            product={selectedProduct} 
            onAddToCart={() => addToCart(selectedProduct)} 
          />
        </div>
      </div>
      
      <RelatedProducts 
        products={products} 
        currentProduct={selectedProduct}
        onSelectProduct={setSelectedProduct}
      />
    </div>
  );
};

const ProductImages = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  // Assuming in the future you might have multiple images
  const images = [product.image]; 

  return (
    <div className="product-images">
      <div className="main-image">
        <img src={images[selectedImage]} alt={product.name} />
      </div>
      <div className="thumbnail-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.name} thumbnail ${index + 1}`}
            className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

const ProductInfo = ({ product, onAddToCart }) => {
  return (
    <div className="product-info">
      <h1>{product.name}</h1>
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <i key={i} className={`fas fa-star`}></i>
        ))}
        <span className="ms-2">(25 reviews)</span>
      </div>
      <div className="price">
        <span className="current-price">₹{product.price}</span>
        <span className="original-price">₹{Math.round(product.price * 1.25)}</span>
        <span className="ms-2 badge bg-success">20% OFF</span>
      </div>
      <p className="description">{product.description}</p>
      
      <div className="mb-4">
        <div className="mb-2 fw-bold">Available Colors</div>
        <div className="d-flex gap-2">
          <div className="color-option active" style={{backgroundColor: '#333', width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer'}}></div>
          <div className="color-option" style={{backgroundColor: '#6a1b9a', width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer'}}></div>
          <div className="color-option" style={{backgroundColor: '#1976d2', width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer'}}></div>
        </div>
      </div>
      
      <button className="add-to-cart-btn" onClick={onAddToCart}>
        <i className="fas fa-shopping-cart"></i>
        Add to Cart
      </button>
    </div>
  );
};

const RelatedProducts = ({ products, currentProduct, onSelectProduct }) => {
  const relatedProducts = products.filter(p => p._id !== currentProduct._id).slice(0, 3);

  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <div className="row">
        {relatedProducts.map(product => (
          <div key={product._id} className="col-md-4 col-sm-6 mb-4">
            <div className="related-product-card" onClick={() => onSelectProduct(product)}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
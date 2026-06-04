import React from 'react';
import { ArrowRight } from 'lucide-react';
import espressoImg from '../assets/espresso.png';
import cappuccinoImg from '../assets/cappuccino.png';
import latteImg from '../assets/latte.png';
import flatWhiteImg from '../assets/flat-white.png';
import coldBrewImg from '../assets/cold-brew.png';

const menuItems = [
  {
    id: 1,
    name: 'Single-Origin Espresso',
    description: 'A concentrated double shot of our finest single-origin coffee, boasting intense aroma and rich golden crema.',
    price: '₹220',
    image: espressoImg,
    tag: 'Classic'
  },
  {
    id: 2,
    name: 'Artisan Cappuccino',
    description: 'Double espresso combined with a rich layer of velvet microfoam and steamed milk, dusted with organic cocoa powder.',
    price: '₹280',
    image: cappuccinoImg,
    tag: 'Popular'
  },
  {
    id: 3,
    name: 'Caffè Latte Art',
    description: 'Smooth, double shot espresso blended with steamed milk and topped with an elegant hand-poured leaf art.',
    price: '₹310',
    image: latteImg,
    tag: 'Classic'
  },
  {
    id: 4,
    name: 'Barista Flat White',
    description: 'Ristretto double shot with velvety milk microfoam, creating a perfectly balanced, bold, and creamy espresso flavor.',
    price: '₹290',
    image: flatWhiteImg,
    tag: 'Barista Pick'
  },
  {
    id: 5,
    name: 'Citrus Cold Brew',
    description: 'Slow-steeped cold brew infusion served over ice, finished with a fresh zesty orange peel for a bright, refreshing taste.',
    price: '₹320',
    image: coldBrewImg,
    tag: 'Seasonal'
  },
  {
    id: 6,
    name: 'Affogato al Caffè',
    description: 'A generous scoop of premium Madagascar vanilla bean gelato drowned in a hot shot of our signature espresso.',
    price: '₹340',
    image: 'https://images.unsplash.com/photo-1594761053050-444f64729e17?auto=format&fit=crop&w=600&q=80',
    tag: 'Dessert'
  }
];

const Menu = () => {
  const handleOrderMock = (name) => {
    alert(`Thank you for selecting ${name}! This is a landing page prototype. In a live application, this would add the item to your digital cart or checkout page.`);
  };

  return (
    <section id="menu">
      <div className="section-header">
        <span className="section-badge">Signature Brews</span>
        <h2 className="section-title">Our Special Menu</h2>
        <p className="section-subtitle">
          Every cup is carefully crafted by our champion baristas using beans roasted on-site. Explore our selection of curated flavors.
        </p>
      </div>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <article className="menu-card" key={item.id}>
            <div className="menu-image-container">
              <img 
                src={item.image} 
                alt={item.name} 
                className="menu-img"
                loading="lazy"
              />
            </div>
            
            <div className="menu-content">
              <div className="menu-header">
                <h3 className="menu-name">{item.name}</h3>
                <span className="menu-price">{item.price}</span>
              </div>
              <p className="menu-desc">{item.description}</p>
              
              <div className="menu-footer">
                <span className="menu-tag">{item.tag}</span>
                <button 
                  className="menu-order-btn"
                  onClick={() => handleOrderMock(item.name)}
                >
                  Order Now <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Menu;

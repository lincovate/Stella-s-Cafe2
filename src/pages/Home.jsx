import React, { useState } from "react";
import Hero from "./hero";
import "./home.css";

const menuData = {
  Breakfast: [
    {
      name: "Fresh Chicken Salad",
      price: 10.5,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      description: "Fresh greens with grilled chicken and citrus dressing.",
    },
    {
      name: "Orange Juice",
      price: 8.5,
      image: "https://images.unsplash.com/photo-1613478223719-2ab802602423",
      description: "Freshly squeezed natural orange juice rich in vitamin C.",
    },
  ],

  Lunch: [
    {
      name: "Grilled Steak",
      price: 14,
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
      description: "Juicy grilled steak with herbs and spices.",
    },
    {
      name: "Fruit Bowl",
      price: 9,
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
      description: "Mixed seasonal fruits full of nutrients.",
    },
  ],

  Dinner: [
    {
      name: "Salmon Delight",
      price: 18,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
      description: "Oven-baked salmon served with vegetables.",
    },
    {
      name: "Cream Pasta",
      price: 11,
      image: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642",
      description: "Creamy pasta with garlic and parmesan.",
    },
  ],
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("Breakfast");
  const [expandedItem, setExpandedItem] = useState(null);

  const handleAddToCart = (item) => {
    console.log("Added to cart:", item);
    alert(`${item.name} added to cart`);
  };

  return (
    <>
      <Hero />

      {/* ABOUT SHORT SECTION */}
      <section className="section about-preview">
        <h2>We Leave A Delicious Memory</h2>
        <p>Fresh food, great experience crafted with passion.</p>
      </section>

      {/* OFFERS SECTION */}
      <section className="offers-section">

        <div className="offers-header">
          <h6>Klassy Week</h6>
          <h2>This Week’s Special Meal Offers</h2>
        </div>

        {/* TABS */}
        <div className="tabs">
          {Object.keys(menuData).map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* MENU GRID */}
        <div className="menu-grid">
          {menuData[activeTab].map((item, index) => (
            <div
              key={index}
              className="menu-card"
              style={{ backgroundImage: `url(${item.image})` }}
            >

              {/* DARK OVERLAY */}
              <div className="overlay" />

              {/* CONTENT */}
              <div className="menu-content">
                <h3>{item.name}</h3>
                <p className="price">${item.price}</p>

                <button
                  className="cart-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>

                <button
                  className="more-btn"
                  onClick={() =>
                    setExpandedItem(expandedItem === index ? null : index)
                  }
                >
                  See More ↓
                </button>
              </div>

              {/* EXPANDED INFO */}
              {expandedItem === index && (
                <div className="expanded-info">
                  <p>{item.description}</p>
                  <button onClick={() => setExpandedItem(null)}>
                    Close ✕
                  </button>
                </div>
              )}

            </div>
          ))}
        </div>

      </section>
      {/* FOOD QUOTE */}
<section className="food-quote">
  <h3>
    “One cannot think well, love well, sleep well, if one has not dined well.”
  </h3>

  <span>— Virginia Woolf</span>
</section>
    </>
  );
} 
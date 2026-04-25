import { useEffect, useState } from "react";
import "./menu.css";
import Hero from "./hero";

const foods = [
  {
    name: "Chocolate Cake",
    price: 14,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    description:
      "Rich chocolate cake made with premium cocoa and creamy ganache.",
    nutrients: "Calories: 350 | Sugar: 28g | Fat: 18g",
  },
  {
    name: "Blueberry Cheesecake",
    price: 10,
    image:
      "https://images.unsplash.com/photo-1542826438-bd32f43d626f",
    description:
      "Creamy cheesecake with fresh blueberries and biscuit base.",
    nutrients: "Calories: 280 | Sugar: 20g | Fat: 14g",
  },
  {
    name: "Pancake Stack",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    description:
      "Fluffy pancakes served with syrup and butter.",
    nutrients: "Calories: 420 | Sugar: 18g | Fat: 16g",
  },
];

export default function Menu() {
  const [index, setIndex] = useState(0);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % foods.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const food = foods[index];
  const dishOfTheDay = foods[(index + 1) % foods.length];

  return (
    <>
      <Hero />
    <section className="menu-section">

      {/* HERO CAROUSEL */}
      <div
        className="menu-hero"
        style={{ backgroundImage: `url(${food.image})` }}
      >
        <div className="overlay" />

        <div className="menu-content">
          <h1>{food.name}</h1>
          <p className="price">${food.price}</p>

          <div className="actions">
            <button className="cart-btn">Add to Cart</button>

            <button
              className="info-btn"
              onClick={() => setFocus(true)}
            >
              See More ↓
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 FULLSCREEN FOCUS PANEL */}
      {focus && (
        <div className="focus-overlay" onClick={() => setFocus(false)}>

          <div
            className="focus-card"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={food.image} alt={food.name} />

            <div className="focus-info">
              <h2>{food.name}</h2>
              <p className="price">${food.price}</p>

              <p><strong>Description:</strong> {food.description}</p>
              <p><strong>Nutrients:</strong> {food.nutrients}</p>

              <button
                className="close-btn"
                onClick={() => setFocus(false)}
              >
                Close
              </button>
            </div>
          </div>

        </div>
      )}

      {/* DISH OF THE DAY */}
      <div className="dish-of-day">
        <div className="dish-text">
          <h6>Dish of the Day</h6>
          <h2>{dishOfTheDay.name}</h2>

          <p>{dishOfTheDay.description}</p>

          <div className="highlight">🔥 Special Offer Available Today</div>

          <button className="order-btn">
            Order Now - ${dishOfTheDay.price}
          </button>
        </div>

        <div className="dish-img">
          <img src={dishOfTheDay.image} alt="dish of day" />
        </div>
      </div>

    </section>
    </>
  );
}
import { useEffect, useState } from "react";
import "./hero.css";

const images = [
  "/assets/images/slide-01.jpg",
  "/assets/images/slide-02.jpg",
  "/assets/images/slide-03.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="top">
      <div className="hero-row">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <div className="hero-text">
            <h4>Stella's Cafe</h4>
            <h6>THE BEST EXPERIENCE</h6>

            <p>
              We serve freshly prepared meals with passion, combining flavor,
              freshness, and comfort in every dish we create for you.
            </p>

            <a href="/reservation" className="reservation-btn">
              Make A Reservation
            </a>
          </div>
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="hero-right">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((img, i) => (
              <div className="carousel-slide" key={i}>
                <img src={img} alt={`slide-${i}`} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
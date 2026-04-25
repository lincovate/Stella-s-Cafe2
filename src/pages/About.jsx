import { useEffect, useState } from "react";
import "./about.css";
import Hero from "./hero";

export default function About() {

  // running counter
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const target = 12000;

    const interval = setInterval(() => {
      start += 200;

      if (start >= target) {
        start = target;
        clearInterval(interval);
      }

      setCount(start);
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Hero />

      <section id="about" className="about-section">
        <div className="about-container">

          {/* LEFT SIDE */}
          <div className="about-left">

            <div className="section-heading">
              <h6>About Us</h6>
              <h2>A Taste That Leaves a Lasting Memory</h2>
            </div>

            <p className="about-text">
              At Stella’s Cafe, we believe food is more than just a meal —
              it’s an experience that connects people, moments, and emotions.
              Every dish is carefully prepared using fresh ingredients,
              crafted with passion, and served with warmth.
            </p>

            <p className="about-text">
              From rich flavors to comforting aromas, we aim to create a place
              where every visit feels like home, yet tastes like something unforgettable.
            </p>

            {/* thumbnails */}
            <div className="about-thumbs">
              <img src="/assets/images/about-thumb-01.jpg" alt="thumb1" />
              <img src="/assets/images/about-thumb-02.jpg" alt="thumb2" />
              <img src="/assets/images/about-thumb-03.jpg" alt="thumb3" />
            </div>

            {/* CTA */}
            <div className="about-cta">
              <p>
                <span>Need a modern website like this?</span><br />
                Contact <strong>Lincovate</strong> to design and build your digital experience.
              </p>

              <a
                href="https://www.lincovate.com/#/contact/"
                className="cta-btn"
                target="_blank"
                rel="noreferrer"
              >
                Get In Touch
              </a>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="about-right">

            <div className="video-thumb">
              <a
                href="https://www.youtube.com/watch?v=2L39R_QxU6A"
                target="_blank"
                rel="noreferrer"
                className="play-btn"
              >
                ▶
              </a>

              <img
                src="/assets/images/about-video-bg.jpg"
                alt="video background"
              />
            </div>

            {/* COUNTER */}
            <div className="counter-box">
              <h3>{count.toLocaleString()}+</h3>
              <p>Happy Clients & Collaborations</p>
            </div>

          </div>

        </div>

        {/* =========================
            SPONSORS SECTION
        ========================= */}
        <div className="sponsors">

          <p className="sponsor-title">
            Trusted By Leading Brands
          </p>

          <div className="sponsor-logos">
            <img src="/assets/sponsors/kfc.png" alt="KFC" />
            <img src="/assets/sponsors/java.png" alt="Java House" />
            <img src="/assets/sponsors/pizza-hut.png" alt="Pizza Hut" />
            <img src="/assets/sponsors/naivas.png" alt="Naivas" />
          </div>

        </div>

      </section>
    </>
  );
}
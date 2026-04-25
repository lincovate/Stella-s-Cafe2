import "./chefs.css";
import React from "react";
import Hero from "./hero";

const chefs = [
  {
    name: "Randy Walker",
    role: "Pastry Chef",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "David Martin",
    role: "Cookie Chef",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    socials: {
      facebook: "#",
      twitter: "#",
      behance: "#",
    },
  },
  {
    name: "Peter Perkson",
    role: "Pancake Chef",
    image:
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548",
    socials: {
      facebook: "#",
      twitter: "#",
      google: "#",
    },
  },
];

export default function Chefs() {
  return (
    <>
      <Hero />
    
    <section className="chefs-section">

      {/* HEADER */}
      <div className="chefs-header">
        <h6>Our Chefs</h6>
        <h2>We offer the best ingredients for you</h2>
      </div>

      {/* CHEF LIST (ALTERNATING LAYOUT) */}
      <div className="chef-list">

        {chefs.map((chef, i) => (
          <div
            className={`chef-row ${i % 2 === 0 ? "normal" : "reverse"}`}
            key={i}
          >

            {/* IMAGE */}
            <div className="chef-img">
              <img src={chef.image} alt={chef.name} />

              <div className="overlay" />

              {/* SOCIALS */}
              <div className="socials">
                <a href={chef.socials.facebook}>f</a>
                <a href={chef.socials.twitter}>t</a>
                {chef.socials.instagram && <a href={chef.socials.instagram}>i</a>}
                {chef.socials.behance && <a href={chef.socials.behance}>b</a>}
                {chef.socials.google && <a href={chef.socials.google}>g</a>}
              </div>
            </div>

            {/* INFO */}
            <div className="chef-info">
              <h3>{chef.name}</h3>
              <p>{chef.role}</p>

              <p className="desc">
                Passionate chef dedicated to creating unforgettable flavors and
                culinary experiences for every guest.
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* VIDEO CAROUSEL (SIMPLIFIED) */}
      <div className="chef-video">

        <h2>Cooking Classes</h2>

        <div className="video-card">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d"
            alt="cooking class"
          />

          <a
            className="play-btn"
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
          >
            ▶
          </a>
        </div>

      </div>

      {/* HEAD CHEF FEATURE */}
      <div className="head-chef">

        <div className="head-img">
          <img
            src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8"
            alt="head chef"
          />
        </div>

        <div className="head-text">
          <h6>Head Chef</h6>
          <h2>Master of Culinary Art</h2>

          <p>
            “Great food is not just made with ingredients, but with passion,
            discipline, and love. Every plate tells a story.”
          </p>

          <span>- Executive Chef</span>
        </div>

      </div>

    </section>
    </>
  );
}
import "./footer.css";

export default function Footer() {
  return (
    <footer className="lux-footer">

      <div className="footer-overlay" />

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-block brand">
          <h2>Stella’s Café</h2>
          <p>
            A place where taste meets emotion. We craft every dish with care,
            passion, and a promise of unforgettable dining experiences.
          </p>

          <div className="quote">
            “Good food is the foundation of genuine happiness.”
          </div>
        </div>

        {/* CONTACT */}
        <div className="footer-block">
          <h3>Visit Us</h3>
          <p>Nairobi, Kenya</p>
          <p>Open: 7:00 AM – 10:00 PM</p>

          <p>📞 +254 7911 923 98</p>
          <p>✉ info@stellascafe.com</p>
        </div>

        {/* EXPERIENCE */}
        <div className="footer-block">
          <h3>Experience</h3>
          <p>✔ Fresh farm ingredients</p>
          <p>✔ Luxury dining atmosphere</p>
          <p>✔ Private bookings & events</p>
          <p>✔ Chef curated menus</p>
        </div>

        {/* EMPTY SPACE / BALANCE (important for luxury feel) */}
        <div className="footer-block">
          <h3>Hours</h3>
          <p>Mon - Fri: 7am - 10pm</p>
          <p>Weekend: 8am - 11pm</p>
        </div>

      </div>

      {/* SOCIAL BAR (NEW CLEAN DESIGN) */}
      <div className="social-bar">
        <a href="https://www.facebook.com/profile.php?id=61585002120123&rdid=Oh1cZQzpQgRTTByN&share_url=https://www.facebook.com/share/1DvRKVNAWe/#">Facebook</a>
        <a href="https://www.instagram.com/lincovate4/">Instagram</a>
        <a href="https://www.tiktok.com/@lincovate">Tiktok</a>
        <a href="https://www.linkedin.com/company/lincovate-tech/">LinkedIn</a>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Stella’s Café — Crafted with passion
      </div>

    </footer>
  );
}
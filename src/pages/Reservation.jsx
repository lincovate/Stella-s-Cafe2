import { useState } from "react";
import "./reservation.css";

export default function Reservation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    date: "",
    time: "Lunch",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Data:", form);
    alert("Reservation submitted successfully!");
  };

  return (
    <section className="reservation-section" id="reservation">

      {/* BACKGROUND IMAGE LAYER */}
      <div className="reservation-bg"></div>

      {/* DARK OVERLAY */}
      <div className="reservation-overlay"></div>

      <div className="reservation-container">

        {/* LEFT SIDE */}
        <div className="reservation-info">

          <div className="section-heading">
            <h6>Contact Us</h6>
            <h2>
              Here You Can Make A Reservation Or Just Walk In To Our Cafe
            </h2>
          </div>

          <p className="desc">
            Enjoy a warm dining experience at Stella’s Café. Fresh meals, cozy environment,
            and excellent service every time you visit.
          </p>

          <div className="contact-cards">

            <div className="contact-card">
              <h4>Phone Numbers</h4>
              <p>+254 700 000 000</p>
              <p>+254 711 000 111</p>
            </div>

            <div className="contact-card">
              <h4>Emails</h4>
              <p>hello@stellascafe.com</p>
              <p>info@stellascafe.com</p>
            </div>

          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="reservation-form">

          <h3>Table Reservation</h3>

          <form onSubmit={handleSubmit}>

            <div className="grid-2">
              <input
                name="name"
                placeholder="Your Name*"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid-2">
              <input
                name="phone"
                placeholder="Phone Number*"
                value={form.phone}
                onChange={handleChange}
                required
              />

              <select name="guests" value={form.guests} onChange={handleChange}>
                {[1,2,3,4,5,6,7,8,9,10,11,12].map((n) => (
                  <option key={n} value={n}>{n} Guests</option>
                ))}
              </select>
            </div>

            <div className="grid-2">
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
              />

              <select name="time" value={form.time} onChange={handleChange}>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
            />

            <button type="submit">
              Make A Reservation
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}
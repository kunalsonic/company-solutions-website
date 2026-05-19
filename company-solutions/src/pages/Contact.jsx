import { NavLink } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo.png";

export default function Contact() {
  return (
    <div className="website">
      {/* Navbar */}

      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="Company Solutions" className="main-logo" />
        </div>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      {/* Contact Hero */}

      <section className="contact-hero">
        <p className="tag">CONTACT OUR EXPERTS</p>

        <h1>Let’s Start Your Business Journey</h1>

        <p className="description">
          Get professional support for company registration,
          legal compliance and startup services across India.
        </p>
      </section>

      {/* Contact Section */}

      <section className="contact-section">
        {/* Left */}

        <div className="contact-left">
          <h2>Get In Touch</h2>

          <p>
            Our experts are ready to help you with company registration,
            GST registration, trademark registration and legal compliance
            services.
          </p>

          <div className="contact-info-box">
            <h3>📞 Phone</h3>
            <span>+91 99999 99999</span>
          </div>

          <div className="contact-info-box">
            <h3>✉️ Email</h3>
            <span>info@companysolutions.in</span>
          </div>

          <div className="contact-info-box">
            <h3>📍 Location</h3>
            <span>India</span>
          </div>
        </div>

        {/* Right */}

        <div className="contact-form-box">
          <h2>Request Consultation</h2>

          <input type="text" placeholder="Your Name" />

          <input type="text" placeholder="Phone Number" />

          <input type="email" placeholder="Email Address" />

          <input type="text" placeholder="Business Type" />

          <textarea
            placeholder="Your Message"
            rows="5"
          ></textarea>

          <button>Submit Inquiry</button>
        </div>
      </section>

      {/* CTA */}

      <section className="contact-cta">
        <h2>Professional Business Solutions Across India</h2>

        <p>
          Trusted by startups, entrepreneurs and growing businesses.
        </p>
      </section>
      {/* Footer */}

<footer className="footer">
  <div className="footer-grid">
    {/* Company */}

    <div className="footer-about">
      <div className="logo">
        <div className="logo-icon">CS</div>

        <div>
          <h2>Company Solutions</h2>
          <p>Business Registration Experts</p>
        </div>
      </div>

      <p>
        Professional company registration, GST, trademark and legal
        compliance services across India.
      </p>
    </div>

    {/* Quick Links */}

    <div className="footer-links">
      <h3>Quick Links</h3>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>

    {/* Services */}

    <div className="footer-links">
      <h3>Services</h3>

      <a href="#">Private Limited Registration</a>
      <a href="#">LLP Registration</a>
      <a href="#">GST Registration</a>
      <a href="#">Trademark Registration</a>
    </div>

    {/* Contact */}

    <div className="footer-links">
      <h3>Contact</h3>

      <a href="#">+91 99999 99999</a>
      <a href="#">info@companysolutions.in</a>
      <a href="#">India</a>
    </div>
  </div>

  <div className="footer-bottom">
    <p>
      © 2026 Company Solutions. All Rights Reserved.
    </p>
  </div>
</footer>
    </div>
  );
}
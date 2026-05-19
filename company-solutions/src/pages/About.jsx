import { NavLink } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo.png";

export default function About() {
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

      {/* About Hero */}

      <section className="about-hero">
        <div className="about-left">
          <p className="tag">ABOUT COMPANY SOLUTIONS</p>

          <h1>
            Helping Businesses Start, Grow & Stay Compliant
          </h1>

          <p className="description">
            Company Solutions provides professional business registration,
            legal compliance and startup support services across India.
            We simplify the registration process for entrepreneurs,
            startups and growing businesses.
          </p>
        </div>

        <div className="about-right">
          <div className="about-image-box">
            <h2>500+</h2>
            <p>Businesses Successfully Registered</p>
          </div>
        </div>
      </section>

      {/* Company Intro */}

      <section className="about-content">
        <div className="section-heading">
          <p>WHO WE ARE</p>
          <h2>Professional Business Registration Experts</h2>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3>Our Mission</h3>

            <p>
              To make business registration and legal compliance easy,
              affordable and accessible for every entrepreneur in India.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Vision</h3>

            <p>
              To become one of India’s most trusted business consulting
              and registration service providers.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Expertise</h3>

            <p>
              We specialize in company registration, GST registration,
              trademark registration, NGO registration and legal services.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose */}

      <section className="about-why">
        <div className="section-heading">
          <p>WHY CLIENTS TRUST US</p>
          <h2>Why Choose Company Solutions</h2>
        </div>

        <div className="about-why-grid">
          <div className="about-why-card">
            <span>✔</span>
            <h3>Fast Process</h3>
            <p>Quick registration and documentation support.</p>
          </div>

          <div className="about-why-card">
            <span>✔</span>
            <h3>Affordable Pricing</h3>
            <p>Professional services at reasonable pricing.</p>
          </div>

          <div className="about-why-card">
            <span>✔</span>
            <h3>Expert Support</h3>
            <p>Experienced team for legal and compliance guidance.</p>
          </div>

          <div className="about-why-card">
            <span>✔</span>
            <h3>PAN India Service</h3>
            <p>Online support and registration services across India.</p>
          </div>
        </div>
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

    {/* Quick NavLinks */}

    <div className="footer-NavLinks">
      <h3>Quick NavLinks</h3>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>

    {/* Services */}

    <div className="footer-NavLinks">
      <h3>Services</h3>

      <a href="#">Private Limited Registration</a>
      <a href="#">LLP Registration</a>
      <a href="#">GST Registration</a>
      <a href="#">Trademark Registration</a>
    </div>

    {/* Contact */}

    <div className="footer-NavLinks">
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
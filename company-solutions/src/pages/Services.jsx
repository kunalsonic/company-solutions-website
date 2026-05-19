import { NavLink } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo.png";

export default function Services() {
  const services = [
    {
      title: "Private Limited Registration",
      description:
        "Complete company incorporation support for startups and businesses.",
    },

    {
      title: "LLP Registration",
      description:
        "Affordable LLP registration with legal documentation support.",
    },

    {
      title: "GST Registration",
      description:
        "Fast GST registration and return filing assistance.",
    },

    {
      title: "Trademark Registration",
      description:
        "Protect your business brand legally across India.",
    },

    {
      title: "NGO Registration",
      description:
        "Society, Trust & Section 8 company registration services.",
    },

    {
      title: "MSME Registration",
      description:
        "Get MSME benefits and Udyam registration support.",
    },

    {
      title: "ISO Certification",
      description:
        "Professional ISO certification consulting services.",
    },

    {
      title: "Startup India Registration",
      description:
        "Startup India recognition and DPIIT registration support.",
    },

    {
      title: "Legal Compliance",
      description:
        "Annual filing and business legal compliance solutions.",
    },
  ];

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

      {/* Services Hero */}

      <section className="services-hero">
        <p className="tag">OUR PROFESSIONAL SERVICES</p>

        <h1>Business Registration & Legal Compliance Services</h1>

        <p className="description">
          We provide affordable and professional business registration,
          legal compliance and startup consulting services across India.
        </p>
      </section>

      {/* Services Grid */}

      <section className="all-services-section">
        <div className="services-page-grid">
          {services.map((service, index) => (
            <div className="services-page-card" key={index}>
              <div className="service-icon">✔</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button>Get Started</button>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}

      <section className="process-section">
        <div className="section-heading">
          <p>OUR PROCESS</p>

          <h2>Simple Registration Process</h2>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <div className="process-number">01</div>

            <h3>Consultation</h3>

            <p>Discuss your business registration requirements.</p>
          </div>

          <div className="process-card">
            <div className="process-number">02</div>

            <h3>Documentation</h3>

            <p>Submit required documents with expert guidance.</p>
          </div>

          <div className="process-card">
            <div className="process-number">03</div>

            <h3>Application Filing</h3>

            <p>Our team handles the complete filing process.</p>
          </div>

          <div className="process-card">
            <div className="process-number">04</div>

            <h3>Registration Complete</h3>

            <p>Receive certificates and registration documents.</p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="services-cta">
        <h2>Need Help Starting Your Business?</h2>

        <p>
          Get professional consultation from our business experts today.
        </p>

        <button>Contact Us</button>
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
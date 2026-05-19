import { NavLink } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo.png";

export default function Home() {
  const services = [
    "Private Limited Registration",
    "LLP Registration",
    "GST Registration",
    "Trademark Registration",
    "NGO Registration",
    "MSME Registration",
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

      {/* Hero Section */}

      <section className="hero">
        <div className="hero-left">
          <p className="tag">
            START YOUR BUSINESS PROFESSIONALLY
          </p>

          <h1>
            Premium Business Registration & Legal Services In India
          </h1>

          <p className="description">
            Company Solutions helps startups and businesses with company
            registration, GST, trademark, NGO registration and legal
            compliance services across India.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Free Consultation
            </button>

            <button className="secondary-btn">
              Explore Services
            </button>
          </div>

          <div className="stats">
            <div>
              <h3>500+</h3>
              <p>Businesses Registered</p>
            </div>

            <div>
              <h3>99%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <h2>Free Business Consultation</h2>

            <input type="text" placeholder="Your Name" />

            <input type="text" placeholder="Phone Number" />

            <input type="text" placeholder="Business Type" />

            <button>Request Callback</button>
          </div>
        </div>
      </section>

      {/* Services */}

      <section className="services-section">
        <div className="section-heading">
          <p>OUR SERVICES</p>

          <h2>Professional Business Solutions</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">✔</div>

              <h3>{service}</h3>

              <p>
                Professional registration and compliance support for
                businesses.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}

      <section className="why-section">
        <div className="why-left">
          <p className="section-tag">WHY CHOOSE US</p>

          <h2>Trusted Business Registration Experts</h2>

          <p className="why-description">
            We help startups and businesses with fast, affordable and
            professional registration and legal compliance services
            across India.
          </p>

          <div className="why-points">
            <div className="why-card">
              <span>✔</span>
              <p>Fast Registration Process</p>
            </div>

            <div className="why-card">
              <span>✔</span>
              <p>Affordable Professional Services</p>
            </div>

            <div className="why-card">
              <span>✔</span>
              <p>Expert Legal Assistance</p>
            </div>

            <div className="why-card">
              <span>✔</span>
              <p>PAN India Support</p>
            </div>
          </div>
        </div>

        <div className="why-right">
          <div className="why-box">
            <h3>500+</h3>
            <p>Businesses Registered</p>
          </div>

          <div className="why-box">
            <h3>99%</h3>
            <p>Client Satisfaction</p>
          </div>

          <div className="why-box">
            <h3>100%</h3>
            <p>Online Process</p>
          </div>

          <div className="why-box">
            <h3>PAN</h3>
            <p>India Services</p>
          </div>
        </div>
      </section>

      {/* Process Section */}

      <section className="process-section">
        <div className="section-heading">
          <p>HOW IT WORKS</p>

          <h2>Simple & Fast Registration Process</h2>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <div className="process-number">01</div>

            <h3>Submit Inquiry</h3>

            <p>
              Contact our experts and share your business requirements.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">02</div>

            <h3>Expert Consultation</h3>

            <p>
              Our team guides you with the best registration solution.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">03</div>

            <h3>Documentation</h3>

            <p>
              Submit required documents online with easy support.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">04</div>

            <h3>Registration Complete</h3>

            <p>
              Get your registration completed quickly and smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}

      <section className="testimonial-section">
        <div className="section-heading">
          <p>CLIENT TESTIMONIALS</p>

          <h2>What Our Clients Say</h2>
        </div>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              “Excellent support for company registration. Very fast
              and professional service.”
            </p>

            <div className="client-info">
              <h4>Rahul Sharma</h4>

              <span>Startup Founder</span>
            </div>
          </div>

          <div className="testimonial-card">
            <p>
              “Smooth GST registration process and expert guidance
              throughout.”
            </p>

            <div className="client-info">
              <h4>Priya Mehta</h4>

              <span>Business Owner</span>
            </div>
          </div>

          <div className="testimonial-card">
            <p>
              “Highly recommended for trademark and legal compliance
              services.”
            </p>

            <div className="client-info">
              <h4>Amit Verma</h4>

              <span>Entrepreneur</span>
            </div>
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
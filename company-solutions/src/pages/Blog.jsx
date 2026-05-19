import { NavLink } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo.png";

export default function Blog() {
  const blogs = [
    {
      title: "How To Register A Private Limited Company In India",
      description:
        "Complete step-by-step guide for startup company registration in India.",
    },

    {
      title: "GST Registration Process Explained",
      description:
        "Everything businesses need to know about GST registration and compliance.",
    },

    {
      title: "Benefits Of Trademark Registration",
      description:
        "Why trademark registration is important for protecting your business brand.",
    },

    {
      title: "LLP vs Private Limited Company",
      description:
        "Understand the major differences before choosing your business structure.",
    },

    {
      title: "Startup India Registration Benefits",
      description:
        "Learn how Startup India recognition helps startups grow faster.",
    },

    {
      title: "NGO Registration Complete Guide",
      description:
        "How to register a Trust, Society or Section 8 company in India.",
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
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      {/* Blog Hero */}

      <section className="blog-hero">
        <p className="tag">BUSINESS & LEGAL INSIGHTS</p>

        <h1>Latest Business Registration & Startup Guides</h1>

        <p className="description">
          Explore expert guides, startup tips and legal compliance
          articles to help your business grow professionally.
        </p>
      </section>

      {/* Blog Grid */}

      <section className="blog-section">
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-image"></div>

              <div className="blog-content">
                <span>Business Registration</span>

                <h3>{blog.title}</h3>

                <p>{blog.description}</p>

                <button>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="blog-cta">
        <h2>Need Professional Business Guidance?</h2>

        <p>
          Connect with our experts for company registration and legal
          compliance services.
        </p>

        <button>Contact Experts</button>
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

      <NavLink to="/about">About</NavLink>
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
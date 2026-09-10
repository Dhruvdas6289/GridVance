import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-label">
            <span className="label-line"></span>
            About TarVance
          </div>

          <h1>
            Helping businesses build a
            <br />
            <em>stronger digital</em> presence.
          </h1>

          <p className="about-hero-description">
            TarVance helps businesses establish and grow their presence online through professional websites and Google Business Profile solutions.
          </p>
        </div>
      </section>

      {/* CORE PHILOSOPHY / INTRO */}
      <section className="section intro">
        <div className="container intro-grid">
          <div className="section-number">01 / 03</div>

          <div>
            <p className="eyebrow">Our Mission</p>

            <h2>
              Designed for credibility,
              <br />
              <span>built for growth.</span>
            </h2>

            <p className="large-text">
              We build modern, responsive, and user-friendly websites that help businesses showcase their services, build credibility, and make it easier for customers to connect with them.
            </p>

            <p className="large-text" style={{ marginTop: "25px" }}>
              Alongside website development, we help businesses set up, optimize, and maintain their Google Business Profile—ensuring business information stays accurate and the online presence remains active.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO / SERVICES */}
      <section className="section-dark section">
        <div className="container">
          <div className="section-header">
            <div className="section-number">02 / 03</div>

            <div>
              <p className="eyebrow light">What We Do</p>
              <h2>
                Our core
                <br />
                <em>solutions.</em>
              </h2>
            </div>
          </div>

          <div className="services-list">
            <div className="service-item">
              <span>01</span>
              <h3>Website Development</h3>
              <p>
                Professional websites designed around your business and customers to drive real engagement.
              </p>
            </div>

            <div className="service-item">
              <span>02</span>
              <h3>Google Business Setup</h3>
              <p>
                Complete setup and search optimization of your Google Business Profile to capture local discovery.
              </p>
            </div>

            <div className="service-item">
              <span>03</span>
              <h3>Website & GBP Maintenance</h3>
              <p>
                Regular updates and active management to keep your profile accurate, secure, and fresh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH / VALUE PROP */}
      <section className="section">
        <div className="container intro-grid">
          <div className="section-number">03 / 03</div>

          <div>
            <p className="eyebrow">Our Approach</p>

            <h2>
              Simple, focused &amp;
              <br />
              <span>effective.</span>
            </h2>

            <p className="large-text">
              Our approach is simple—understand your business, build the right digital presence, and help you grow online with clarity and purpose.
            </p>

            {/* <Link to="/contact" className="text-link">
              Start building your presence <span></span>
            </Link> */}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-image"></div>

        <div className="container cta-content">
          <p className="eyebrow light">TarVance — Advancing Technology.</p>

          <h2>
            Ready to elevate your
            <br />
            digital <em>presence?</em>
          </h2>

          <Link to="/contact" className="cta-button">
            Let's discuss your project
            <span></span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
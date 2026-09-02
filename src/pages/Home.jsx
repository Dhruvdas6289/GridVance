import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-background"></div>

        <div className="container hero-content">
          <div className="hero-label">
            <span className="label-line"></span>
            Independent creative studio
          </div>

          <h1>
            We create
            <br />
            <em>digital</em> experiences.
          </h1>

          <div className="hero-bottom">
            <p>
              Strategy, design and technology for brands that believe
              ordinary isn't enough.
            </p>

            <Link to="/contact" className="circle-button">
              <span>Start</span>
              <span>a project</span>
              <strong>↗</strong>
            </Link>
          </div>
        </div>

        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <span className="scroll-line"></span>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro section">
        <div className="container intro-grid">
          <div className="section-number">01 / 04</div>

          <div>
            <p className="eyebrow">What we believe</p>

            <h2>
              Good design isn't
              <br />
              <span>decoration.</span>
            </h2>

            <p className="large-text">
              It is how your brand feels, communicates and connects. We
              combine strategy, creativity and technology to build digital
              experiences that people remember.
            </p>

            <Link to="/contact" className="text-link">
              Let's work together <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section-dark">
        <div className="container">
          <div className="section-header">
            <div className="section-number">02 / 04</div>

            <div>
              <p className="eyebrow light">Our expertise</p>
              <h2>
                Built around
                <br />
                <em>your ambition.</em>
              </h2>
            </div>
          </div>

          <div className="services-list">
            <div className="service-item">
              <span>01</span>
              <h3>Brand Strategy</h3>
              <p>
                Positioning, identity and digital direction that gives your
                business a clear voice.
              </p>
              <span className="service-arrow">↗</span>
            </div>

            <div className="service-item">
              <span>02</span>
              <h3>Digital Design</h3>
              <p>
                Distinctive interfaces and visual systems designed around
                real people and real business goals.
              </p>
              <span className="service-arrow">↗</span>
            </div>

            <div className="service-item">
              <span>03</span>
              <h3>Development</h3>
              <p>
                Fast, responsive and scalable digital products built with
                modern technology.
              </p>
              <span className="service-arrow">↗</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="work section">
        <div className="container">
          <div className="section-header work-heading">
            <div className="section-number">03 / 04</div>

            <div>
              <p className="eyebrow">Selected work</p>
              <h2>
                Made to be
                <br />
                <em>remembered.</em>
              </h2>
            </div>
          </div>

          <div className="projects">
            <article className="project project-large">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=85"
                  alt="Creative branding project"
                />
              </div>

              <div className="project-info">
                <div>
                  <h3>Maison No. 8</h3>
                  <p>Brand Identity · Digital Experience</p>
                </div>

                <span>2026</span>
              </div>
            </article>

            <article className="project project-small">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern creative workspace"
                />
              </div>

              <div className="project-info">
                <div>
                  <h3>North Studio</h3>
                  <p>Digital · Development</p>
                </div>

                <span>2026</span>
              </div>
            </article>

            <article className="project project-medium">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                  alt="Modern office interior"
                />
              </div>

              <div className="project-info">
                <div>
                  <h3>Forma</h3>
                  <p>Strategy · Digital Design</p>
                </div>

                <span>2025</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-image"></div>

        <div className="container cta-content">
          <div className="section-number light-number">04 / 04</div>

          <p className="eyebrow light">Have a project in mind?</p>

          <h2>
            Let's make
            <br />
            something <em>great.</em>
          </h2>

          <Link to="/contact" className="cta-button">
            Tell us about your project
            <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
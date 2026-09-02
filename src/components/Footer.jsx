import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link to="/" className="brand footer-brand">
              GridVance<span>®</span>
            </Link>

            <p className="footer-description">
              We create thoughtful digital experiences for ambitious brands
              that want to stand apart.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h4>Explore</h4>
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div>
              <h4>Connect</h4>
              <a href="mailto:dhruvdas39@gmail.com">
                dhruvdas39@gmail.com
              </a>
              <a href="tel:+919876543210">+91 8282017341</a>
            </div>

            <div>
              <h4>Social</h4>
              <a href="#" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 GridVance Studio. All rights reserved.</span>
          <span>Made with intention.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
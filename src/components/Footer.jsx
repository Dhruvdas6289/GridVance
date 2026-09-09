import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

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
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div>
              <h4>Connect</h4>
              <a href="mailto:dhruvdas39@gmail.com">
                dhruvdas39@gmail.com
              </a>
              <a href="tel:+918282017341">+91 8282017341</a>
            </div>

            <div>
              

  <h4>Social</h4>
  <div
    className="social-links"
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    }}
  >
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <FaInstagram size={18} />
      <span>Instagram</span>
    </a>

    <a
      href="https://facebook.com"
      target="_blank"
      rel="noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <FaFacebookF size={18} />
      <span>Facebook</span>
    </a>

    {/* <a
      href="https://linkedin.com"
      target="_blank"
      rel="noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <FaLinkedinIn size={18} />
      <span>LinkedIn</span>
    </a> */}
  </div>

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
// import { useState } from "react";

// function Contact() {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <section className="contact-page">
//       <div className="contact-hero">
//         <div className="container">
//           <p className="eyebrow light">Get in touch</p>

//           <h1>
//             Let's create
//             <br />
//             something <em>meaningful.</em>
//           </h1>

//           <p className="contact-intro">
//             Tell us a little about your project, your goals and where you'd
//             like to go. We'll take it from there.
//           </p>
//         </div>
//       </div>

//       <div className="container contact-main">
//         <div className="contact-details">
//           <div className="section-number">01 / CONTACT</div>

//           <div className="contact-detail">
//             <span>Email</span>
//             <a href="mailto:hello@GridVance.studio">
//               hello@GridVance.studio
//             </a>
//           </div>

//           <div className="contact-detail">
//             <span>Phone</span>
//             <a href="tel:+919876543210">+91 98765 43210</a>
//           </div>

//           <div className="contact-detail">
//             <span>Studio</span>
//             <p>
//               Kolkata, India
//               <br />
//               Working globally
//             </p>
//           </div>

//           <div className="contact-detail">
//             <span>Follow</span>
//             <div className="social-links">
//               <a href="#">Instagram ↗</a>
//               <a href="#">LinkedIn ↗</a>
//             </div>
//           </div>
//         </div>

//         <div className="contact-form-wrapper">
//           {submitted ? (
//             <div className="success-message">
//               <div className="success-icon">✓</div>

//               <p className="eyebrow">Thank you</p>

//               <h2>
//                 Your message
//                 <br />
//                 <em>has been sent.</em>
//               </h2>

//               <p>
//                 We'll get back to you as soon as possible.
//               </p>

//               <button
//                 className="text-link"
//                 onClick={() => setSubmitted(false)}
//               >
//                 Send another message ↗
//               </button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="contact-form">
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="name">Your name *</label>

//                   <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     placeholder="John Doe"
//                     required
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="email">Email address *</label>

//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="john@example.com"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="company">Company / Brand</label>

//                 <input
//                   id="company"
//                   name="company"
//                   type="text"
//                   placeholder="Your company"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="service">What can we help with?</label>

//                 <select id="service" name="service" defaultValue="">
//                   <option value="" disabled>
//                     Select a service
//                   </option>
//                   <option value="branding">Brand Strategy</option>
//                   <option value="design">Digital Design</option>
//                   <option value="development">Development</option>
//                   <option value="other">Something else</option>
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="message">Tell us about your project *</label>

//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="6"
//                   placeholder="A little bit about your project, goals and timeline..."
//                   required
//                 ></textarea>
//               </div>

//               <button type="submit" className="submit-button">
//                 Send enquiry
//                 <span>↗</span>
//               </button>
//             </form>
//           )}
//         </div>
//       </div>

//       <div className="contact-image-section">
//         <img
//           src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85"
//           alt="GridVance studio"
//         />

//         <div className="contact-image-overlay">
//           <span>WE'RE ALWAYS</span>
//           <strong>CURIOUS.</strong>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;

import { useState } from "react";

function Contact() {
const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  const formData = new FormData(e.target);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    service: formData.get("service"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzgq-TNV4nERQDWdnLbxpV3K6wqY6IwoYIEHD5wtTCCOD0-GG-rh8HHc46GJVizdXtl/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    setSubmitted(true);
    e.target.reset();

  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Something went wrong. Please try again.");

  } finally {
    setLoading(false);
  }
};

return ( <section className="contact-page"> <div className="contact-hero"> <div className="container"> <p className="eyebrow light">Get in touch</p>

```
      <h1>
        Let's create
        <br />
        something <em>meaningful.</em>
      </h1>

      <p className="contact-intro">
        Tell us a little about your project, your goals and where you'd
        like to go. We'll take it from there.
      </p>
    </div>
  </div>

  <div className="container contact-main">
    <div className="contact-details">
      <div className="section-number">01 / CONTACT</div>

      <div className="contact-detail">
        <span>Email</span>
        <a href="mailto:hello@GridVance.studio">
          hello@GridVance.studio
        </a>
      </div>

      <div className="contact-detail">
        <span>Phone</span>
        <a href="tel:+919876543210">
          +91 98765 43210
        </a>
      </div>

      <div className="contact-detail">
        <span>Studio</span>
        <p>
          Kolkata, India
          <br />
          Working globally
        </p>
      </div>
    </div>

    <div className="contact-form-wrapper">
      {submitted ? (
        <div className="success-message">
          <div className="success-icon">✓</div>

          <p className="eyebrow">Thank you</p>

          <h2>
            Your message
            <br />
            <em>has been sent.</em>
          </h2>

          <p>
            We'll get back to you as soon as possible.
          </p>

          <button
            className="text-link"
            onClick={() => setSubmitted(false)}
          >
            Send another message ↗
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <div className="form-row">

            <div className="form-group">
              <label htmlFor="name">
                Your name *
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email address *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
              />
            </div>

          </div>

          <div className="form-group">
            <label htmlFor="company">
              Company / Brand
            </label>

            <input
              id="company"
              name="company"
              type="text"
              placeholder="Your company"
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">
              What can we help with?
            </label>

            <select
              id="service"
              name="service"
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>

              <option value="branding">
                Brand Strategy
              </option>

              <option value="design">
                Digital Design
              </option>

              <option value="development">
                Development
              </option>

              <option value="other">
                Something else
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Tell us about your project *
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="A little bit about your project, goals and timeline..."
              required
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send enquiry"}
            <span>↗</span>
          </button>

        </form>
      )}
    </div>
  </div>

  <div className="contact-image-section">
    <img
      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85"
      alt="GridVance studio"
    />

    <div className="contact-image-overlay">
      <span>WE'RE ALWAYS</span>
      <strong>CURIOUS.</strong>
    </div>
  </div>
</section>


);
}

export default Contact;

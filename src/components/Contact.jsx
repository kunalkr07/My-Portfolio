import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact-container" id="contact">
        <div className="contact-heading">
          <h2>Get in Touch</h2>
        </div>

        <div className="contact-left">
          <h2 className="underline">Contact Info</h2>
          Hello! I'm a passionate frontend web developer with a keen eye for
          detail and a love for creating clean, efficient, and user-friendly web
          applications. My journey in web development has allowed me to work on
          a variety of projects, from building College Management Systems and
          Railway Ticket Booking Systems to designing dynamic music apps and
          portfolios. I specialize in React for building interactive user
          interfaces and Sass for clean, modular styling.
          <p>
            <strong>Address:</strong> 123 Main Street, Your City, Country
          </p>
          <p>
            <strong>Email:</strong> youremail@example.com
          </p>
          <div className="social-icons">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="contact-right">
          <h2  className="underline">Contact Us</h2>
          <p>Please fill the form to get in touch!</p>
          <form>
            <div className="input">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>

            <div className="input">
              <i className="fa-solid fa-user"></i>

              <input
                type="text"
                id="email"
                name="name"
                placeholder="Email"
                required
              />
            </div>

            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Message"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

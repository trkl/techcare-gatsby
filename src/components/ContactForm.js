import React, { Component } from 'react';
class ContactForm extends Component {
  render() {
    return (
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="grid-wrapper">
          <div className="col-12">
            <header className="major">
              <h2>Any questions?</h2>
            </header>
          </div>
          <div className="col-6">
            <p>
              <label>
                Your Name <input type="text" name="name" />
              </label>
            </p>
          </div>
          <div className="col-6">
            <p>
              <label>
                Your Email <input type="email" name="email" />
              </label>
            </p>
          </div>
          <div className="col-12">
            <p>
              <label>
                Message <textarea name="message" />
              </label>
            </p>
          </div>
          <p>
            <button type="submit">Send</button>
          </p>
        </div>
      </form>
    );
  }
}

export default ContactForm;

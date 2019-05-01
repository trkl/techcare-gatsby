import React from 'react'

class Footer extends React.Component {
  render() {
    var year = new Date().getFullYear()

    return (
      <section id="footer">
        <ul className="icons">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/techcarefo/"
              className="icon alt fa-facebook"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/techcare-fo"
              className="icon alt fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:info@techcare.fo"
              className="icon alt fa-envelope"
            >
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li> TechCare.fo</li> {year}
          <li>
            Tel: <a href="tel:+298 522244">+298 522244</a>
          </li>
          <li>Vestara Bryggja 15</li>
          <li>V-tal: 612952</li>
        </ul>
      </section>
    )
  }
}

export default Footer

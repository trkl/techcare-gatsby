import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import ContactForm from '../components/ContactForm';

import pic01 from '../assets/images/TechCareCompOverview.jpg';
import pic02 from '../assets/images/deviceWithShadow.png';

class Homepage extends React.Component {
  render() {
    const siteTitle = 'TechCare';

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Software</h2>
              </header>
              <p>
                To make sure that our system is at the cutting edge, we have
                developed our own hardware which utilizes sensor technology to
                the fullest.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="one" className="main style3">
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>Hardware</h2>
              </header>
              <p>
                To make sure that our system is at the cutting edge, we have
                developed our own hardware which utilizes sensor technology to
                the fullest.
              </p>
            </div>
          </div>
        </section>

        <section id="one" className="main style4">
          <ContactForm />
        </section>
      </Layout>
    );
  }
}

export default Homepage;

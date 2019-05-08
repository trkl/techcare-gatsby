import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

class Header extends React.Component {
  state = {
    email: ''
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  _handleSubmit = async event => {
    console.log(this.state.email);
    event.preventDefault();
    const result = await addToMailchimp(this.state.email);
    // I recommend setting `result` to React state
    // but you can do whatever you want
  };

  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major fa-cloud" />
          <h1>
            Do you want <strong>us </strong>to keep<strong> you </strong>{' '}
            posted?
            <br />
            Sign up below!
            <br />
            <br />
          </h1>
          <form onSubmit={this._handleSubmit}>
            <div>
              <input
                id="id01"
                type="text"
                name="email"
                placeholder="example@mail.com "
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>
            <div />

            <div>
              <button id="newsletterSubmit" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Header;

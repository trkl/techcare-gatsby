import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

class Header extends React.Component {
  state = {
    email: '',
    result: null
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
    this.setState({ result: await addToMailchimp(this.state.email) });
    // I recommend setting `result` to React state
    // but you can do whatever you want
  };

  returnMessage() {
    if (this.state.result == null) {
      return (
        <div>
          <h1> </h1>
        </div>
      );
    } else if (this.state.result.result === 'error') {
      return (
        <div>
          <h1>Woops. Something went wrong!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Thank you for subscribing!</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <section id="header">
        <div className="inner">
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
              {this.returnMessage()}
              {/* <h1>
                {this.state.result && this.state.result.result == 'success'
                  ? 'Thank you for subscribing!'
                  : 'It looks like this email is already subscribed!'}
              </h1> */}
            </div>

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

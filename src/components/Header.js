import React from 'react'

class Header extends React.Component {
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
          <form>
            <input
              id="id01"
              type="text"
              name="email"
              placeholder="example@mail.com"
            />
          </form>
        </div>
      </section>
    )
  }
}

export default Header

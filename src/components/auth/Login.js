import React from 'react'

class Login extends React.Component() {
  constructor() {
    super()

    this.state = {
      data: {
        username: '',
        password: ''
      }
    }
    //bind here
  }

  render() {
    <main className="section">
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h2 className="title">Login</h2>
          <div className="field">
            <label className="label">Email</label>
            <input
              className="input"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button className="button is-primary">Log in</button>
        </form>
      </div>
    </main>
  }



}

export default Login

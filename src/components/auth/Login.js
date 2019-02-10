import React from 'react'
import axios from 'axios'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        username: '',
        password: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: {name, value}}) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
    console.log( data )
  }

  handleSubmit(e) {
    e.preventDefault
    console.log(this.state.data)
    axios
      .post('/api/login', this.state.data)
      .then(res => console.log(res.data))
      .catch(err => alert(err.message))


  }

  render() {
    return (
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
    )
  }

}

export default Login

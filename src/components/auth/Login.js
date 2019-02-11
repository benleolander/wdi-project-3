import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'
import Flash from '../../lib/Flash'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        email: '',
        password: ''
      },
      error: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: {name, value}}) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
    //console.log( data )
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data)
    axios
      .post('/api/login', this.state.data)
      .then((res) => {
        Auth.setToken(res.data.token)
        Flash.setMessage('success', res.data.message)
        console.log(res.data.message)
        this.props.history.push('/')
      })
      .catch(() => this.setState({ error: 'Incorrect username/password' }))
  }

  render() {
    return (
      <main
        className={ `section ${this.props.displayed}` }
        id="loginFormSection"
      >
        <div className="container">
          {this.state.error && <div className="notification is-warning">{this.state.error}</div>}
          <form onSubmit={this.handleSubmit}>
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

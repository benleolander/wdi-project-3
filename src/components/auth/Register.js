import React from 'react'
import axios from 'axios'

import ReactFileStack from 'filestack-react'

import Flash from '../../lib/Flash'



class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        image: '',
        bio: ''
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({target: { name, value }}) {
    const data = { ...this.state.data, [name]: value }
    const errors = {...this.state.errors, [name]: null}
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/register', this.state.data)
      .then(()=> {
        Flash.setMessage('success', 'Successfully registered')
        this.props.history.push('/login')
      })
      .catch(err => this.setState({ errors: err.response.data}))
  }

  render() {
    const { username, email, password, passwordConfirmation, bio } = this.state.data
    const errors = this.state.errors
    return (
      <main className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Register</h2>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleChange}
                />
                {errors.username && <small className="help is-danger">{errors.username}</small>}
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={this.handleChange}
                />
                {errors.email && <small className="help is-danger">{errors.email}</small>}
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
              {errors.password && <small className="help is-danger">{errors.password}</small>}
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <input
                className="input"
                type="password"
                name="passwordConfirmation"
                placeholder="Password Confirmation"
                value={passwordConfirmation}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Bio</label>
              <textarea
                className="textarea"
                name="bio"
                placeholder="Please add a bio"
                value={bio}
                onChange={this.handleChange}
              />
              {errors.bio && <small className="help is-danger">Please write a small bio about yourself</small>}
            </div>
            <div className="field filestack">
              <ReactFileStack
                apikey={process.env.FILESTACK_KEY}
                mode={'pick'}
                onSuccess={(res) => this.handleChange({
                  target: {
                    name: 'image',
                    value: res.filesUploaded[0].url
                  }})}
                onError={(err) => console.log(err)}
                buttonText={'Add Profile pic'}
                buttonClass={'filestack-btn button is-dark'}
              />
            </div>
            <div className="regButton">
              <button className="button is-black">Submit</button>
              <div className="thumbnail is-square" style={{
                backgroundImage: `url(${this.state.data.image})`
              }}></div>
            </div>
          </form>
        </div>
      </main>
    )
  }
}

export default Register

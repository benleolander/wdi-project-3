import React from 'react'
import axios from 'axios'

import Flash from '../../lib/Flash'
import RegisterForm from './RegisterForm'

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
    const errors = this.state.errors
    return (
      <main className="section">
        <div className="container">
          <RegisterForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            data={this.state.data}
            errors={errors}
          />
        </div>
      </main>
    )
  }
}

export default Register

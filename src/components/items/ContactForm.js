import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import ContactCreatorForm from '../creator/ContactCreatorForm'

class ContactForm extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        email: '',
        body: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: {name, value}}) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post(`/api/items/${this.props.location.state.id}/contact`, this.state.data)
      .then(res => console.log(res.data))
      .catch(err => alert(err.message))
    this.props.history.goBack()
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <ContactCreatorForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            data={this.state.data}
          />
        </div>
      </main>
    )
  }

}

export default withRouter(ContactForm)

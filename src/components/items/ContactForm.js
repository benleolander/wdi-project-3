import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import Flash from '../../lib/Flash'

import ContactCreatorForm from '../creator/ContactCreatorForm'

class ContactForm extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        email: '',
        body: ''
      },
      errors: {},
      btnColour: 'info',
      btnText: 'Send'
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
    console.log('Submitting this -->', this.props.location.state.id)
    axios
      .post(`/api/items/${this.props.location.state.id}/contact`, this.state.data)
      .then(()=> {
        this.props.history.goBack()
        Flash.setMessage('success','Message sent')
      })

      .catch(err => {
        this.setState({ errors: err.response.data })
      })
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <ContactCreatorForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            data={this.state.data}
            errors={this.state.errors}
            btnColour={this.state.btnColour}
            btnText={this.state.btnText}
          />
        </div>
      </main>
    )
  }

}

export default withRouter(ContactForm)

import React from 'react'
import axios from 'axios'

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
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Contact Creator</h2>
            <div className="field">
              <label className="label">Name</label>
              <input
                className="input"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
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
              <label className="label">Message</label>
              <textarea
                className="textarea"
                name="body"
                placeholder="Message to the creator, e.g. 'I'm interested in purchasing this item'"
                value={this.state.body}
                onChange={this.handleChange}
              />
            </div>
            <button className="button is-primary">Submit</button>
          </form>
        </div>
      </main>
    )
  }

}

export default ContactForm

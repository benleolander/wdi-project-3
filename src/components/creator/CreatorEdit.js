import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'
import Flash from '../../lib/Flash'

import CreatorEditForm from './CreatorEditForm'

class CreatorEdit extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {

      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount() {
    axios.get(`/api/creators/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
  }

  handleChange({ target: { name, value }}){
    const data = {...this.state.data, [name]: value}
    const errors = {...this.state.errors, [name]: null}
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .put(`/api/creators/${this.props.match.params.id}`, this.state.data,
        { headers: { Authorization: `Bearer ${Auth.getToken()}` } }
      )
      .then(() => {
        Flash.setMessage('info', 'Changes saved')
        this.props.history.push(`/creators/${this.props.match.params.id}`)
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }


  render() {
    return (
      <main className="section">
        <div className="container">
          <h2 className="title">Edit Profile</h2>
          <CreatorEditForm
            data={this.state.data}
            errors={this.state.errors}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    )
  }
}

export default CreatorEdit

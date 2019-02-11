import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

class ItemsNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        image: '',
        description: '',
        categories: []
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
    console.log(this.state.data)
    axios
      .post(
        '/api/items/new',
        this.state.data,
        { headers: { Authorization: `Bearer ${Auth.getToken()}` } }
      )
      .then(res => console.log(res.data))
      .catch(err => alert(err.message))
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Post A New Item</h2>
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
              <label className="label">Image</label>
              <input
                className="input"
                name="image"
                placeholder="Image URL"
                value={this.state.image}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Description</label>
              <textarea
                className="input"
                name="description"
                placeholder="A detailed description of your item"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Categories</label>
              <input
                className="input"
                name="categories"
                placeholder="Categories"
                value={this.state.categories}
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

export default ItemsNew

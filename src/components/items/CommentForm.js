import React from 'react'
import axios from 'axios'

class CommentForm extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        rating: 0,
        body: ''
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: {name, value}}) {
    const data = { ...this.state.data, [name]: value }
    const errors = {...this.state.errors, [name]: null}
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post(`/api/items/${this.props.location.state.id}/comment`, this.state.data)
      .then(() => {
        this.props.history.push(`/items/${this.props.location.state.id}`)
      })
      .catch(err => {
        this.setState({ errors: err.response.data})
      })
  }

  render() {
    const { errors } = this.state
    return (
      <main className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">New Comment</h2>
            <div className="field">
              <label className="label">Display Name</label>
              <input
                className="input"
                name="name"
                placeholder="This will be publically visible"
                value={this.state.name}
                onChange={this.handleChange}
              />
              {errors.name && <small className="help is-danger">{errors.name}</small>}
            </div>
            <div className="field">
              <label className="label">Rating</label>
              <div className="control" id="star-ratings">
                <input
                  type="radio"
                  name="rating"
                  value={5}
                  id="5star"
                  onChange={this.handleChange}
                />
                <label className="radio" htmlFor="5star">
                  ★
                </label>
                <input
                  type="radio"
                  name="rating"
                  value={4}
                  id="4star"
                  onChange={this.handleChange}
                />
                <label className="radio" htmlFor="4star">
                  ★
                </label>
                <input
                  type="radio"
                  name="rating"
                  value={3}
                  id="3star"
                  onChange={this.handleChange}
                />
                <label className="radio" htmlFor="3star">
                  ★
                </label>
                <input
                  type="radio"
                  name="rating"
                  value={2}
                  id="2star"
                  onChange={this.handleChange}
                />
                <label className="radio" htmlFor="2star">
                  ★
                </label>
                <input
                  type="radio"
                  name="rating"
                  value={1}
                  id="1star"
                  onChange={this.handleChange}
                />
                <label className="radio" htmlFor="1star">
                  ★
                </label>
              </div>
              {errors.rating && <small className="help is-danger">{errors.rating}</small>}
            </div>
            <div className="field">
              <label className="label">Comment</label>
              <textarea
                className="textarea"
                name="body"
                placeholder="Comment"
                value={this.state.body}
                onChange={this.handleChange}
              />
              {errors.body && <small className="help is-danger">{errors.body}</small>}
            </div>

            <button className="button is-info">Submit</button>
          </form>
        </div>
      </main>
    )
  }

}

export default CommentForm

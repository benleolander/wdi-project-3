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
      .post(`/api/items/${this.props.location.state.id}/comment`, this.state.data)
      .then(() => {
        this.props.history.push(`/items/${this.props.location.state.id}`)
      })
      .catch(err => alert(err.message))
  }

  render() {
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
            </div>

            <button className="button is-info">Submit</button>
          </form>
        </div>
      </main>
    )
  }

}

export default CommentForm

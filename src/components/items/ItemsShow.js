import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import CreatorCard from '../creator/CreatorCard'
import Auth from '../../lib/Auth'

class ItemsShow extends React.Component {
  constructor(){
    super()

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    axios.get(`/api/items/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ data: res.data })
      })
      .catch(err => console.error(err.message))
  }

  handleDelete(){
    axios.delete(`/api/items/${this.props.match.params.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(this.props.history.push('/items'))
      .catch(err => console.log(err))

  }

  render(){
    if (!this.state) return null
    const {
      name,
      creator,
      image,
      description,
      comments,
      averageRating
    } = this.state.data
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-mobile">
            <div className="column is-full-mobile is-half-tablet">
              <div
                className="image is-square"
                style={{
                  backgroundImage: `url(${image})`
                }}
              >
              </div>
            </div>
            <div className="column is-full-mobile">
              <h2 className="title">{name}</h2>
              <h3 className="subtitle">by {creator.username}</h3>

              {averageRating && <h3 className="subtitle"><strong>Rated: </strong>{averageRating}/5</h3>}

              <p>{description}</p>
              <Link to={{
                pathname: '/contact',
                state: { id: creator._id}
              }}>
                Enquiries for {name} by {creator.username}
              </Link>
              {comments.map(comment => {
                return(
                  <div key={comment.id}>
                    <p><strong>{comment.name}</strong></p>
                    <p><strong>Rating: </strong>{comment.rating}/5</p>
                    <p>{comment.body}</p>
                  </div>
                )
              })}
              <Link to={{
                pathname: `/items/${this.props.match.params.id}/comment`,
                state: { id: this.props.match.params.id}
              }}>
                New Comment
              </Link>
            </div>
            <div className="column is-one-fifth-desktop is-two-thirds-mobile">
              <CreatorCard
                creator={creator}
              />
            </div>
            <button onClick={this.handleDelete} className="button is-danger">Delete</button>
          </div>
        </div>
      </section>
    )
  }
}

export default ItemsShow

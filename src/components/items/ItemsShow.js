import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import CreatorCard from '../creator/CreatorCard'
import Auth from '../../lib/Auth'
import StarRatings from '../common/StarRatings'

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
      .then(() => this.props.history.push('/items'))
      .catch(err => console.log(err))

  }

  render(){
    if (!this.state) return null
    const {
      _id,
      name,
      creator,
      image,
      description,
      comments,
      averageRating
    } = this.state.data

    const isAuthenticated = (() => {
      if(Auth.getPayload().sub === creator._id ) return true
      else return false
    })

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

              {averageRating && <StarRatings width={averageRating} />}

              <p>{description}</p>
              <Link to={{
                pathname: '/contact',
                state: { id: creator._id }
              }}>
                <button className="button is-black">Contact Creator</button>
              </Link>

              <div className="card comments">
                <div className="card-header">
                  <p className="card-header-title">Comments</p>
                </div>
                <div className="card-content">
                  {comments.map(comment => {
                    return(
                      <div key={comment._id}>
                        <p><strong>{comment.name}</strong></p>
                        <StarRatings width={comment.rating} />
                        <p>{comment.body}</p>
                        <hr />
                      </div>
                    )
                  })}
                  <div className="card-footer">
                    <Link to={{
                      pathname: `/items/${this.props.match.params.id}/comment`,
                      state: { id: this.props.match.params.id}
                    }}>
                      <button className="button is-black">New Comment</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-one-fifth-desktop is-two-thirds-mobile">
              <CreatorCard
                creator={creator}
              />
            </div>
            {isAuthenticated() && <Link to={`/items/${_id}/edit`} className="button is-info">Edit</Link>}
            {isAuthenticated() && <button onClick={this.handleDelete} className="button is-danger">Delete</button>}
          </div>
        </div>
      </section>
    )
  }
}

export default ItemsShow

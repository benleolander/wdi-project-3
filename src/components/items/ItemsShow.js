import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
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
      .catch(err => console.error(err))

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
            <div className="column is-full-mobile item-info">
              <h2 className="profile-header title">{name}</h2>
              {averageRating && <StarRatings width={averageRating} />}
              <div className="columns">
                <div className="profile-name-image column">
                  <Link
                    className="subtitle"
                    to={`/creators/${creator._id}`}
                  >
                    <h3>by {creator.username}</h3>
                  </Link>
                  <div className="link-to-profile">
                    <Link to={`/creators/${creator._id}`}>
                      <div
                        className="profile-link image"
                        style={{ backgroundImage: `url(${creator.image})` }}
                      >
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="editDelete">
                {isAuthenticated() && <Link to={`/items/${_id}/edit`} className="button is-info editDeleteButtons">Edit Item</Link>}
                {isAuthenticated() && <button onClick={this.handleDelete} className="button is-danger editDeleteButtons">Delete Item</button>}
              </div>
              <p className="item-description">{description}</p>
              <Link to={{
                pathname: '/contact',
                state: { id: creator._id }
              }}>
                <h3>Contact Creator</h3>
              </Link>

              <div className="card comments">
                <div className="card-header">
                  <p className="card-header-title">Comments</p>
                  <Link to={{
                    pathname: `/items/${this.props.match.params.id}/comment`,
                    state: { id: this.props.match.params.id}
                  }}>
                    <button className="button is-inverted">New Comment</button>
                  </Link>
                </div>
                {
                  comments.length === 0 ?
                    <div className="card-content">
                      <h1 className="subtitle is-6">
                      These item has no comments yet...
                      </h1>
                    </div>
                    :
                    <div className="card-content">
                      {comments.map(comment => {
                        return(
                          <div key={comment._id}>
                            <p><strong>{comment.name}</strong></p>
                            <StarRatings width={comment.rating} />
                            <p className="comment-body">{comment.body}</p>
                            <hr />
                          </div>
                        )
                      })}
                    </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ItemsShow

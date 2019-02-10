import React from 'react'
import axios from 'axios'

import CreatorCard from '../creator/CreatorCard'

class ItemsShow extends React.Component {

  componentDidMount(){
    axios.get(`/api/items/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.error(err.message))
  }

  render(){
    if (!this.state) return null
    const {
      name,
      creator,
      image,
      description
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
              <p>{description}</p>
              <a href="#">Contact {creator.username}</a>
            </div>
            <div className="column is-one-fifth-desktop is-two-thirds-mobile">
              <CreatorCard
                creator={creator}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ItemsShow

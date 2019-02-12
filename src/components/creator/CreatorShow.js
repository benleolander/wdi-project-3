import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class CreatorShow extends React.Component{
  constructor(){
    super()

    this.state = {
      selected: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e, i){
    this.setState({ selected: i })
  }

  componentDidMount(){
    axios.get(`/api/creators/${this.props.match.params.id}`)
      .then(res => this.setState({ creator: res.data }))
      .catch(err => console.error(err.message))
  }

  render(){
    if (!this.state.creator) return <p>Loading...</p>
    console.log(this.state.creator)
    const { username, image, items, bio } = this.state.creator
    return(
      <section className="section">

        <div className="container middle">
          <div className="box set-width no-shadow">

            <div className="columns">
              <div className="column">
                <div className="profilePicDiv">
                  <div
                    className="image is-square"
                    style={{
                      backgroundImage: `url(${image})`
                    }}
                  >
                  </div>
                </div>
              </div>
              <div className="column bio-box">
                <h1 className="title is-3">{username}</h1>

                <p className="has-text-grey-dark">{bio}</p>
                <a className="button is-fullwidth is-black">Contact {username}</a>
              </div>
            </div>

          </div>

        </div>
        <div className="section">
          <div className="container set-width">
            <h2 className="title is-3 has-text-is-dark">My Creations</h2>
          </div>
        </div>

        <Link
          to={`/items/${this.state.creator.items[this.state.selected]._id}`}
          className="profileImageLarge image"
          style={{
            backgroundImage: `url(${items[this.state.selected].image})`
          }}>
        </Link>
        <div className="profileImagesSmall columns is-mobile">
          {items.map( (item, i) =>
            <div
              className="column is-1"
              key={item._id}
            >
              <div
                onClick={(e) => this.handleClick(e, i)}
                className="image is-square"
                style={{
                  backgroundImage: `url(${item.image})`
                }}
              ></div>
            </div>
          )}
        </div>
      </section>
    )
  }
}

export default CreatorShow

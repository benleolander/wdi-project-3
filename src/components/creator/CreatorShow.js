import React from 'react'
import axios from 'axios'

class CreatorShow extends React.Component{
  constructor(){
    super()

    this.state = {

    }
  }

  componentDidMount(){
    axios.get(`/api/creators/${this.props.match.params.id}`)
      .then(res => this.setState({ creator: res.data }))
      .catch(err => console.error(err.message))
  }

  render(){
    if (!this.state.creator) return <p>Loading...</p>
    console.log(this.state.creator)
    const { username, image, items } = this.state.creator
    return(
      <section className="section">
        <div className="profilePicDiv container">
          <div
            className="image is-square"
            style={{
              backgroundImage: `url(${image})`
            }}
          >
          </div>
          <h1 className="title is-5">{username}</h1>
        </div>
        <div className="profileImages container">
          {items.map( item =>
            <div
              key={item._id}
              className="image is-square"
              style={{
                backgroundImage: `url(${item.image})`
              }}
            > </div>
          )}
        </div>
      </section>
    )
  }
}

export default CreatorShow

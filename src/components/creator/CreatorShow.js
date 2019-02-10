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
  }

  render(){
    if (!this.state.creator) return <p>Loading...</p>
    console.log(this.state.creator)
    const { username, image } = this.state.creator
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
          <h1 className="title is-3">{username}</h1>
        </div>
      </section>
    )
  }
}

export default CreatorShow

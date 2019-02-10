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
    const { username } = this.state.creator
    return(
      <div>
        <h1 className="title is-3">{username}</h1>
      </div>
    )
  }
}

export default CreatorShow

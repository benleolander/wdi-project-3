import React from 'react'
import axios from 'axios'

class CreatorShow extends React.Component{
  constructor(){
    super()

    this.state = {

    }
  }

  componentDidMount(){
    axios.get(`/api/creators/${this.props.params.match.id}`)
      .then(res => console.log(res))
  }

  render(){
    return null
  }
}

export default CreatorShow

import React from 'react'
import axios from 'axios'

class ItemsIndex extends React.Component {

  componentDidMount(){
    axios.get('/api')
      .then(res => this.setState({ data: res.data }))
  }

  render(){
    return (
      <div className="indexDiv columns is-gapless is-mobile is-multiline">
        {
          !this.state ||
          this.state.data.map(item =>
            <div
              key={item._id}
              className="itemDiv column is-one-fifth-desktop is-one-quarter-tablet is-one-third-mobile"
            >
              <div
                className="image is-square"
                style={ {backgroundImage: `url(${item.image})`} }
              >
                <div className="itemDescription is-square">
                  <h3 className="title is-4">{item.name}</h3>
                  <h4 className="subtitle is-5">by {item.creator.username}</h4>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }

}

export default ItemsIndex

import React from 'react'

const data = [
  {
    _id: 2,
    name: 'Elven table',
    image: 'http://www.spencerfieldlarcombe.com/images/_cached/400/1809434.jpg',
    creator: 'John Doe',
    description: 'Table for any Gandalf out in the West',
    categories: ['Carpentry', 'Tables']
  }
]

class ItemsIndex extends React.Component {

  componentDidMount(){
    this.setState({ data })
  }

  render(){
    return (
      <div className="indexDiv columns">
        {
          !this.state ||
          this.state.data.map(item =>
            <div key={item._id} className="itemDiv column is-one-fifth">
              <div
                className="image"
                style={ {backgroundImage: `url(${item.image})`} }
              ></div>
              <div className="itemDescription">
                <h3>{item.name}</h3>
                <h4>by {item.creator}</h4>
              </div>
            </div>
          )
        }
      </div>
    )
  }

}

export default ItemsIndex

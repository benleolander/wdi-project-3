import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ContactCreatorForm from './ContactCreatorForm'


class CreatorShow extends React.Component{
  constructor(){
    super()

    this.state = {
      selected: 0,
      data: {
        name: '',
        email: '',
        body: ''
      },
      errors: {},
      success: '',
      status: 'info'
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick(e, i){
    this.setState({ selected: i })
  }

  componentDidMount(){
    axios.get(`/api/creators/${this.props.match.params.id}`)
      .then(res => this.setState({ creator: res.data }))
      .catch(err => console.error(err.message))
  }

  componentDidUpdate(){
    console.log(this.state.data)
  }

  handleChange({ target: {name, value} }) {
    const data = { ...this.state.data, [name]: value }
    //const errors = { ...this.state.errors, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
  
    axios.post('/api/contact', { ...this.state.data, creatorId: this.state.creator._id })
      .then(() => {
        console.log('Posted')
        this.setState({ ...this.state.data, success: 'Message sent!'})
        console.log(this.state.success)
      })
      .catch(err => {
        console.log(err.response.data)
        this.setState({ errors: err.response.data })
      })
  }



  render(){
    if (!this.state.creator) return <p>Loading...</p>

    const { username, image, items, bio, creatorAverage } = this.state.creator
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

                {creatorAverage && <h3 className="subtitle"><strong>Rated: </strong>{creatorAverage}/5</h3>}

                <p className="has-text-grey-dark">{bio}</p>
                <Link className="button is-fullwidth is-black" to={{
                  pathname: '/contact',
                  state: { id: this.state.creator._id }
                }}>Contact {username}</Link>
              </div>
            </div>

          </div>

        </div>
        <div className="section">
          <div className="container set-width">
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
        <ContactCreatorForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data = {this.state.data}
          errors = {this.state.errors}
          success = {this.state.success}
        />
      </section>
    )
  }
}


export default CreatorShow

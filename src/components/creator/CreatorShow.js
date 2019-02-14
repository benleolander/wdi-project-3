import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ContactCreatorForm from './ContactCreatorForm'
import Flash from '../../lib/Flash'
import Auth from '../../lib/Auth'
import StarRatings from '../common/StarRatings'

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
      btnColour: 'info',
      btnText: 'Send'
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleClick(e, i){
    this.setState({ selected: i })
  }

  componentDidMount(){
    axios.get(`/api/creators/${this.props.match.params.id}`)
      .then(res => this.setState({ creator: res.data }))
      .catch(err => console.error(err.message))
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
        this.colourButton('success', 'Sent')

      })
      .catch(err => {
        console.log(err.response.data)
        this.setState({ errors: err.response.data })
        this.colourButton('warning', 'Failed')
      })
  }

  colourButton(btnColour, btnText) {
    this.setState({ btnColour: btnColour, btnText: btnText })
    setTimeout(()=> {
      this.setState({ btnColour: 'info', btnText: 'Send' })
    }, 2000)
  }


  handleDelete(){
    axios.delete(`/api/creators/${this.state.creator._id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => {
        Auth.removeToken()
        Flash.setMessage('danger', 'You have deleted your account. Sorry to see you go!')
      })
      .then(() => this.props.history.push('/items'))
      .catch(err => console.log(err))
  }



  render(){
    if (!this.state.creator) return <p>Loading...</p>

    const { username, image, items, bio, creatorAverage, _id } = this.state.creator

    const isAuthenticated = (() => {
      if(Auth.getPayload().sub === _id) return true
      else return false
    })

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

                {creatorAverage && <StarRatings width={creatorAverage} />}

                <p className="has-text-grey-dark">{bio}</p>

                <Link className="button is-fullwidth is-black" to={{
                  pathname: '/contact',
                  state: { id: this.state.creator._id }
                }}>Contact {username}</Link>

                {isAuthenticated() && <button onClick={this.handleDelete} className="button is-danger">Delete Profile</button>}

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
          btnText = {this.state.btnText}
          btnColour = {this.state.btnColour}

        />
      </section>
    )
  }
}


export default CreatorShow

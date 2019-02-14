import React from 'react'
import axios from 'axios'
import ContactCreatorForm from './ContactCreatorForm'
import Flash from '../../lib/Flash'
import Auth from '../../lib/Auth'
import StarRatings from '../common/StarRatings'
import CreatorItems from './CreatorItems'

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
      btnText: 'Contact creator'
      deletBtn: false
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
      this.setState({ btnColour: 'info', btnText: 'Contact creator' })
    }, 2000)
  }

  // clearForm(){
  //   this.setState({ /data(.*)\w+/: '' })
  // }


  handleDelete(){
    if(this.state.deleteBtn){
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
    this.setState({ deleteBtn: !this.state.deletBtn })
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
        <div className="container">
          <div className="columns">
            <div className="creator-profile column is-half">
              <div
                className="image"
                style={{
                  backgroundImage: `url(${image})`
                }}
              >
              </div>
              <h1 className="title is-4">{username}</h1>
              {creatorAverage && <StarRatings width={creatorAverage} />}
              <p className="has-text-grey-dark">{bio}</p>
              {
                isAuthenticated() &&
                <button
                  onClick={this.handleDelete}
                  className={`button ${this.state.deleteBtn ?
                    'is-danger':
                    'is-black'}`}
                  id="deleteProfileBtn"
                >
                  <span
                    className={`deleteBtn ${this.state.deleteBtn ? '':'active'}`}
                  >Delete</span>
                  <span
                    className={`confirm ${this.state.deleteBtn ? 'active':''}`}
                  >Are you sure?</span>
                </button>
              }
              <ContactCreatorForm
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                data = {this.state.data}
                errors = {this.state.errors}
                btnText = {this.state.btnText}
                btnColour = {this.state.btnColour}
              />
            </div>
            {
              items.length === 0 ?
                <div className="column">
                  <h1 className="title">
                    {`${this.state.creator.username} hasn't added any items yet...`}
                  </h1>
                </div> :
                <CreatorItems
                  items={items}
                  selected={this.state.selected}
                  handleClick={this.handleClick}
                />
            }
          </div>
        </div>
      </section>
    )
  }
}


export default CreatorShow

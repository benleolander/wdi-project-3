import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  constructor(){
    super()
    this.state = {
      navbarOpen: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    e.preventDefault()
    this.setState({navbarOpen: !this.state.navbarOpen})
  }



  render(){
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <h1>Created</h1>
          </Link>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className='navbar-menu'>
          <div className="navbar-end">
            <Link to="/register" className="navbar-item" >Register</Link>
          </div>
        </div>

      </nav>
    )
  }
}

export default Navbar

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

          <a role="button" className={`navbar-burger burger ${this.state.navbarOpen ? 'is-active': ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"  onClick={this.handleClick}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link to="/register" className="navbar-item" >Register</Link>
            <Link to="/login" className="navbar-item" >Login</Link>
          </div>
        </div>

      </nav>
    )
  }
}

export default Navbar

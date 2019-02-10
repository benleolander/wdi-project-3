import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

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
  //
  // logout() {
  //   Auth.removeToken()
  //   this.props.history.push('/')
  // }



  render(){
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <h1 className="title is-2">Created.</h1>
          </Link>

          <a role="button" className={`navbar-burger burger ${this.state.navbarOpen ? 'is-active': ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"  onClick={this.handleClick}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            {!Auth.isAuthenticated() && <Link className="navbar-item" to="/login">Login</Link>}
            {Auth.isAuthenticated() && <Link className="navbar-item" to="/items/new">Add an item</Link>}
            <Link to="/register" className="navbar-item" >Register</Link>
          </div>
        </div>

      </nav>
    )
  }
}

export default Navbar

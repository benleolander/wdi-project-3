import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../../lib/Auth'
import Login from '../auth/Login'
import Flash from '../../lib/Flash'

class Navbar extends React.Component {
  constructor(){
    super()
    this.state = {
      navbarOpen: false,
      loginActive: false
    }
    this.toggle = this.toggle.bind(this)
    this.logout = this.logout.bind(this)

  }

  toggle(key){
    this.setState({[key]: !this.state[key]})
  }

  logout() {
    Auth.removeToken()
    Flash.setMessage('danger', 'You have logged out')
    this.props.history.push('/')
  }

  componentDidUpdate(prevProps) {
    if(this.props.location.pathname !== prevProps.location.pathname &&
      this.props.location.pathname !== '/login'){
      this.setState({ navbarOpen: false, loginActive: false })
    }
  }

  render(){
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <h1 className="title is-2">Created.</h1>
              </Link>

              <a role="button" className={`navbar-burger burger ${this.state.navbarOpen ? 'is-active': ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"  onClick={() => this.toggle('navbarOpen')}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
              <div className="navbar-end">
                {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item" >Register</Link>}
                {Auth.isAuthenticated() && <Link className="navbar-item" to="/items/new">Add an item</Link>}
                {!Auth.isAuthenticated() &&
                  <a
                    to="/login"
                    className="navbar-item"
                    onClick={() => this.toggle('loginActive')}>Login</a>}
                {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.logout}>Logout</a>}
              </div>
            </div>
          </div>
        </nav>
        <Login
          displayed={`${this.state.loginActive ? 'displayed' : ''}`}
          toggle={this.toggle}
        />
      </div>
    )
  }
}

export default withRouter(Navbar)

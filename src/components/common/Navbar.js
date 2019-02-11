import React from 'react'
import { Link, Switch, Route, withRouter } from 'react-router-dom'

import Auth from '../../lib/Auth'
import Login from '../auth/Login'

class Navbar extends React.Component {
  constructor(){
    super()
    this.state = {
      navbarOpen: false,
      loginActive: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.logout = this.logout.bind(this)

  }

  handleClick(e, key){
    this.setState({[key]: !this.state[key]})
  }

  logout() {
    Auth.removeToken()
    this.props.history.push('/api/login')
  }



  render(){
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <h1 className="title is-2">Created.</h1>
            </Link>

            <a role="button" className={`navbar-burger burger ${this.state.navbarOpen ? 'is-active': ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"  onClick={(e) => this.handleClick(e, 'navbarOpen')}>
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
                <Link to={{
                  pathname: '/login'
                }}
                className="navbar-item"
                onClick={(e) => this.handleClick(e, 'loginActive')}>Login</Link>}
              {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.logout}>Logout</a>}
            </div>
          </div>

        </nav>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
        <Login
          displayed={`${this.state.loginActive ? 'displayed' : ''}`}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default withRouter(Navbar)

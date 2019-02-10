import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './style.scss'

import Home from './components/Home'
import Navbar from './components/common/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import ItemsShow from './components/items/ItemsShow'
import ContactForm from './components/items/ContactForm'
import CreatorShow from './components/creator/CreatorShow'

class App extends React.Component {

  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Navbar />

            <Switch>
              <Route path="/creators/:id" component={CreatorShow} />
              <Route path="/items/:id" component={ItemsShow} />
              <Route path="/contact" component={ContactForm} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/" component={Home} />
            </Switch>

          </div>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

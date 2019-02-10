import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './style.scss'

import Home from './components/Home'
import FlashMessages from './components/common/FlashMessages'
import Navbar from './components/common/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import ItemsShow from './components/items/ItemsShow'
import CreatorShow from './components/creator/CreatorShow'

class App extends React.Component {

  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <FlashMessages />

            <Switch>
              <Route path="/creators/:id" component={CreatorShow} />
              <Route path="/items/:id" component={ItemsShow} />
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

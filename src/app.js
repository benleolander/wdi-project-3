import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './style.scss'

import Home from './components/Home'
import Navbar from './components/common/Navbar'
import Register from './components/auth/Register'
import ItemsShow from './components/items/ItemsShow'

class App extends React.Component {

  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Navbar />

            <Switch>
              <Route path="/items/:id" component={ItemsShow} />
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

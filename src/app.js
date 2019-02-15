import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Favicon from 'react-favicon'

import './style.scss'

import Home from './components/Home'
import FlashMessages from './components/common/FlashMessages'
import Navbar from './components/common/Navbar'
import Register from './components/auth/Register'
import ItemsShow from './components/items/ItemsShow'
import ItemsNew from './components/items/ItemsNew'
import ItemEdit from './components/items/ItemEdit'
import ContactForm from './components/items/ContactForm'
import CommentForm from './components/items/CommentForm'
import CreatorEdit from './components/creator/CreatorEdit'
import CreatorShow from './components/creator/CreatorShow'

class App extends React.Component {

  render(){
    return(

      <BrowserRouter>

        <main>

          <Navbar />
          <FlashMessages />

          <Switch>
            <Route path="/creators/:id/edit" component={CreatorEdit} />
            <Route path="/creators/:id" component={CreatorShow} />
            <Route path="/items/:id/edit" component={ItemEdit} />
            <Route path="/items/new" component={ItemsNew} />
            <Route path="/items/:id/comment" component={CommentForm} />
            <Route path="/items/:id" component={ItemsShow} />
            <Route path="/contact" component={ContactForm} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Home} />
          </Switch>

        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <div>
    <Favicon url='assets/favicon.png'/>
    <App />
  </div>,
  document.getElementById('root')
)

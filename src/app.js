import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Home from './components/Home'
import Navbar from './components/common/Navbar'

const data = [
  {
    _id: 2,
    name: 'Elven table',
    image: 'http://www.spencerfieldlarcombe.com/images/_cached/400/1809434.jpg',
    creator: 'John Doe',
    description: 'Table for any Gandalf out in the West',
    categories: ['Carpentry', 'Tables']
  }
]

class App extends React.Component {
  constructor(){
    super()
  }

  componentDidMount(){
    this.setState({ data })
  }

  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Navbar />

            <Switch>
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

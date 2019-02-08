import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

class App extends React.Component {
  constructor(){
    super()
  }


  render(){
    return(
      <h1>Sup</h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

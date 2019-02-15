import React from 'react'

class Loading extends React.Component {
  constructor(){
    super()

    this.state = {
      chars: ['.', '.', '.'],
      count: -1
    }
  }

  componentDidMount(){
    setInterval(() => {
      let count = this.state.count + 1
      if(count > 2) count = -1
      this.setState({ count })
    }, 500)
  }

  render(){
    return (
      <div id="loading">
        <h1 className="title">
          C
          {this.state.chars.map((char, i) =>
            <span
              key={i}
              className={`dot ${this.state.count >= i ? 'displayed':''}`}
            >{char}</span>
          )}
        </h1>
      </div>
    )
  }
}

export default Loading

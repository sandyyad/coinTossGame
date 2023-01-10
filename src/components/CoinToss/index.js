// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isTrue: 0, head: 0, tail: 0, total: 0}

  updateIsTrue = () => {
    const value = Math.floor(Math.random() * 2)
    if (value % 2 === 0) {
      this.setState(prevState => ({
        isTrue: value,
        total: prevState.total + 1,
        head: prevState.head + 1,
      }))
    } else {
      this.setState(prevState => ({
        isTrue: value,
        total: prevState.total + 1,
        tail: prevState.tail + 1,
      }))
    }
  }

  render() {
    const {isTrue, head, tail, total} = this.state
    const header = (
      <div className="heading-image-container">
        <img
          className="header-image"
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          alt="toss result"
        />
      </div>
    )
    const tailer = (
      <div>
        <img
          className="header-image"
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          alt="tail"
        />
      </div>
    )

    const results = isTrue === 0

    const display = results ? header : tailer

    return (
      <div className="main-div-container">
        <div className="sub-div-container">
          <h1 className="heading">coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <div>{display}</div>
          <button onClick={this.updateIsTrue} className="button" type="button">
            Toss Coin
          </button>
          <div className="results-div-container">
            <p>Total: {total}</p>
            <p>Heads: {head}</p>
            <p>Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

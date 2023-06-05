// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  onFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  onLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="con">
        <h1 className="head">Shoe/Hide</h1>
        <div className="fir-lst-con">
          <div className="first-con">
            <button className="button" type="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>

            {isFirstName && <p className="joe">Joe</p>}
          </div>
          <div className="first-con">
            <button className="button" type="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>

            {isLastName && <p className="joe">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

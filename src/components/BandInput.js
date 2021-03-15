// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addBand(this.state)
    this.setState({name: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <input type="text" value={this.state.name} onChange={this.handleOnChange} ></input>
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.name}</p>
      </div>
    )
  }
}

export default BandInput

import React, { Component } from 'react'
import { connect } from 'react-redux'

// We need to import our action to add a new timer
import { addTimer } from '../actions';
import './new-timer.css';

class NewTimer extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "" }
  }

  render() {
    // Build out a component that takes a name as input and a save button to save the timer
    return (
      <div className='new-timer'>
        <input
          className='new-timer__input'
          type='text'
          placeholder="New Timer Name"
          name="name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })} />
        <button
          className='new-timer__button'
          onClick={(e) => {
            this.props.addTimer(this.state.name)
          }}>Save</button>
      </div>
    )
  }
}

// Not needed for this component
const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = () => {
  return { addTimer }
}

export default connect(mapStateToProps, mapDispatchToProps())(NewTimer)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './timer-view.css'
// Import our toggleTimer action
import { toggleTimer } from '../actions';
import { formatTime } from '../utils';

class TimerView extends Component {
  // Timer should have its name, time, and a start/stop button (logic for this button will be built out later)
  render() {

    // Extract these specific props to use in the component
    const { index, toggleTimer, timer } = this.props
    const buttonClass = timer.isRunning ? "stop" : "start";
    return (
      <div className='timer-view'>
        <div>
          <h2 className='timer-view-name__h2'>{timer.name}</h2>
          <h1 className='timer-view-name__h1'>{formatTime(timer.time)}</h1>
        </div>
        <button
          className={`timer-view__button timer-view__button--${buttonClass}`}
          // This calls our toggleTimer action on the specific timer (specified by the index)
          onClick={(e) => {
            toggleTimer(index)
          }}>
          {/* Text of the button is determined by if the timer is running or not */}
          {timer.isRunning ? "Stop" : "Start"}
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

// Use the toggleTimer action for this component
const mapDispatchToProps = () => {
  return { toggleTimer }
}

export default connect(mapStateToProps, mapDispatchToProps())(TimerView)
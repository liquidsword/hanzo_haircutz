import React, { Component } from 'react';
import { connect } from 'react-redux'

class SchedulerContainer extends Component {
  render() {
    return(
      <div></div>
    );
  }
};

const mapStateToProps = state => {
  return {
    scheduler: state.scheduler
  }
}

export default connect(mapStateToProps)(SchedulerContainer);

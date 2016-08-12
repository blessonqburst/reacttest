import React, { Component, PropTypes } from 'react';

class TestSample extends Component {
  static propTypes = {
    name: PropTypes.string,
    src: PropTypes.string,
    id: PropTypes.string
  }

  render() {
    return (<div><br></br><p>My Name:{this.props.name}</p>
            <p>My Image:{this.props.src}</p>
            <p>My Id:{this.props.id} </p></div>);
  }
}

export default TestSample;

import React from 'react';

export default class Clock extends React.Component {
  constructor() {
    super();

    this.state = { secondes: Date.now() / 1000 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      seconds: Date.now / 1000
    });
  }

  render() {
    return (
      <p>{this.state.seconds} seconds have ellapsed since the UNIX epoch.</p>
    );
  }
}

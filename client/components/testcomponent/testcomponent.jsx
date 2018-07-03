import React from 'react';

class TestComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {clicksCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newClicksCount = this.state.clicksCount + 1;
    this.setState({clicksCount: newClicksCount});
  }

  render() {
    return (
      <div>
        Clicks: <span>{this.state.clicksCount}</span>
        <div><button onClick={this.onLike}>Click me</button></div>
      </div>
    );
  }

}

export default TestComponent;
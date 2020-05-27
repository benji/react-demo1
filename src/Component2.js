import React from "react";

/**
 * Demo:
 * React will trigger a cascading update warning even if the component doesn't re-render.
 */
class Component2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidUpdate() {
    console.log(
      "Component2 - componentDidUpdate - setting counter to same value"
    );
    this.setState({ counter: this.state.counter });
  }

  incrementCounter() {
    console.log("Component2 - incrementing counter");
    this.setState({ counter: this.state.counter + 1 });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const shouldUpdate = nextState.counter !== this.state.counter;
    console.log("Component2 - shouldComponentUpdate?", shouldUpdate);
    return shouldUpdate;
  }

  render() {
    console.log("Component2 - Rendering!");
    return (
      <>
        Component2 counter: {this.state.counter}
        <br />
        <button onClick={this.incrementCounter.bind(this)}>
          increment counter
        </button>
      </>
    );
  }
}

export default Component2;

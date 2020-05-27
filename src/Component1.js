import React from "react";

/**
 * Demo:
 * By default React will trigger a re-render when calling setState even if the resulting state is the same.
 */
class Component1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  setCounterToSameValue() {
    console.log("Component1 - set counter to same value");
    this.setState({ counter: this.state.counter });
  }

  incrementCounter() {
    console.log("Component1 - incrementing counter...");
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    console.log("Component1 - Rendering!");
    return (
      <>
        Component1 counter: {this.state.counter}
        <br />
        <button onClick={this.setCounterToSameValue.bind(this)}>
          set same state
        </button>
        <br />
        <button onClick={this.incrementCounter.bind(this)}>
          set different state
        </button>
      </>
    );
  }
}

export default Component1;

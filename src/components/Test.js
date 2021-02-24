import React from "react";
class WindowDimensions extends React.Component {
  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      1000
    );
    console.log(this.interval);
  }

  componentWillUnmount() {
    // window.removeEventListener("resize", this.updateDimensions);
    console.log("componentWillUnmount");
    clearInterval(this.interval);
  }

  render() {
    return <span>here</span>;
  }
}
export default WindowDimensions;

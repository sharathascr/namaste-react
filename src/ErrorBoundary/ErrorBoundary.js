import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log("Error caught by error boundary: ", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <FallbackComponent />;
    }
    return this.props.children;
  }
}

const FallbackComponent = () => {
  return (
    <div>
      <h1>Oops! something went wrong.</h1>
      <p>Please try again later</p>
    </div>
  );
};

export default ErrorBoundary;

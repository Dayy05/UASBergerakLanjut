import React, { Component } from 'react';
import { Text } from 'react-native';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error in component:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <Text>Something went wrong!</Text>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

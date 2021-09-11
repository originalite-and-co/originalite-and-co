import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error(error, errorInfo);
  }

  render() {
    const { props, state } = this;
    if (state.hasError) {
      return props.renderChildren ? (
        <>
          {props.children}
          {props.fallback}
        </>
      ) : (
        props.fallback
      );
    }

    return props.children;
  }
}

ErrorBoundary.propTypes = {
  fallback: PropTypes.element.isRequired,
  renderChildren: PropTypes.bool
};

ErrorBoundary.defaultProps = {
  renderChildren: false
};

export default React.memo(ErrorBoundary);

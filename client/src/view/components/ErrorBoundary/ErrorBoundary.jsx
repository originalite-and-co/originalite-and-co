import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false, error: null};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true, error}
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo)
    }

    render() {
        return this.state.hasError ? (<>{this.props.fallback}{this.props.children}</>) : this.props.children
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.element.isRequired,
    fallback: PropTypes.element.isRequired
}

export default ErrorBoundary;
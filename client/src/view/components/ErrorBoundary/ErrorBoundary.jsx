import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo)
    }

    render() {
        return this.state.hasError ? (<>{this.props.fallback}{this.props.children}</>) : this.props.children
    }
}

ErrorBoundary.propTypes = {
    fallback: PropTypes.element.isRequired
}

export default React.memo( ErrorBoundary);
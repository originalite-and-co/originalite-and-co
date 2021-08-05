import React, {Component} from 'react';
import ErrorToast from "../ErrorToast/ErrorToast";

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
        if (this.state.hasError) {
            return <ErrorToast message="An error has occurred. Please try again later"/>
        }

        return this.props.children
    }
}

export default ErrorBoundary;
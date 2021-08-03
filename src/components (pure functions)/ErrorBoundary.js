import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasErrors: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasErrors: true})
    }

    render() {
        if (this.state.hasErrors) {
            return <h1>Oops! That is not good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;

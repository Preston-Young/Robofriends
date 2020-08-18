import React, {Component} from 'react';


class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    // Life Cycle Hook
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong...</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;
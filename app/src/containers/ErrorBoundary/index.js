import React from 'react'
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            info: null
        };
    }
    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
            error: error,
            info: info
        });
    }
    render() {
        const { hasError, error, info } = this.state

        if (hasError) {
            console.error(`
O erro: ${error.toString()}
Onde ocorreu: ${info.componentStack}
            `)
            return (
                <div className="erro" data-testid="erro">
                    <h1>Oops, algo deu errado :(</h1>
                    {/* 
                    <h3>O erro:</h3> {error.toString()}
                    <h3>Onde ocorreu:</h3> {info.componentStack} */}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary
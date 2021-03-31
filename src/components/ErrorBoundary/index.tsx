import React from 'react'
interface State {
  error:any
  errorInfo: {
    componentStack: string | null
  } | null
  }
class ErrorBoundary extends React.Component<any, State> {
  state:State = { error: 'null', errorInfo: null }
  constructor (props) {
    super(props)
   
  }

  componentDidCatch (error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render () {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary

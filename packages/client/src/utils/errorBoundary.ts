import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
  errorMessage?: string
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      errorMessage: ''
    }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error:', error, 'Error Info:', errorInfo)
    this.setState({ errorMessage: error.toString() })
  }

  render() {
    if (this.state.hasError) {
      return `Something went wrong in child component ${this.state.errorMessage}`
    }

    return this.props.children
  }
}

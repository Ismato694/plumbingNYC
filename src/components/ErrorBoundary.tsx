import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}
interface State {
  hasError: boolean
}

/** App-level error boundary so a render error shows a friendly recovery UI. */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Hook for real error reporting (e.g. Sentry)
    console.error('App error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="grid min-h-screen place-items-center bg-slate-50 px-4 text-center">
          <div>
            <h1 className="text-2xl font-bold text-brand-900">Something went wrong</h1>
            <p className="mt-3 text-slate-600">
              Please refresh the page, or call us at{' '}
              <a href="tel:+16465807524" className="font-semibold text-brand-700 underline">
                +1 (646) 580-7524
              </a>
              .
            </p>
            <button onClick={() => window.location.reload()} className="btn-secondary mt-6">
              Reload page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

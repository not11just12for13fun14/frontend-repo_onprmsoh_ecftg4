import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // You could send this to a logging service
    // eslint-disable-next-line no-console
    console.error('UI ErrorBoundary caught an error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center p-6">
          <div className="max-w-lg w-full">
            <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
              <p className="font-semibold">Something went wrong rendering the page.</p>
              <p className="mt-1 text-sm opacity-80">Try a hard refresh. If it persists, share your browser + device so we can fix it.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4 bg-gray-50 text-sm overflow-auto">
              <pre className="whitespace-pre-wrap break-words">
                {String(this.state.error)}
              </pre>
            </div>
            <a href="/" className="mt-4 inline-flex items-center px-4 py-2 rounded-lg bg-slate-900 text-white font-medium">Reload Home</a>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

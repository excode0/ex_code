// src/lib/theme-provider-wrapper.tsx
'use client';

import React, { Component, ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ThemeErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ThemeProvider error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Theme Error
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              There was an error loading the theme. Please refresh the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeErrorBoundary>
      <ThemeProvider>{children}</ThemeProvider>
    </ThemeErrorBoundary>
  );
}

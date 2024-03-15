import ErrorBoundaryRoot from './Root';
import ErrorBoundaryProvider from './Provider';

const ErrorBoundary = ErrorBoundaryRoot

ErrorBoundary.Provider = ErrorBoundaryProvider;

export default ErrorBoundary;
export {
ErrorBoundaryRoot as ErrorBoundary,
ErrorBoundaryProvider
}
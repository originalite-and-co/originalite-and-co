import { render } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  test('if it catches an error and renders an error toast', () => {
    const ErrorComponent = () => {
      throw new Error('Test');
    };

    // eslint-disable-next-line no-console
    console.error = jest.fn();

    const { getByText } = render(
      <ErrorBoundary fallback={<p>Error</p>}>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(getByText(/error/i)).toBeInTheDocument();
    // eslint-disable-next-line no-console
    expect(console.error).toHaveBeenCalled();
  });
});

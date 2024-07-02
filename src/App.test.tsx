import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

test('renders learn react link', () => {
  const { container } = render(
    <App />,
    { wrapper: () => <QueryClientProvider client={new QueryClient()} />}
  );
  expect(container).toMatchSnapshot();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello, React!', () => {
  render(<App />);
  const textElement = screen.getByText(/Hello, React!/i);
  expect(textElement).toBeInTheDocument();
});

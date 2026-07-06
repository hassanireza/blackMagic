import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Black Magic sign up call to action', () => {
  render(<App />);
  const button = screen.getByText(/sign up for updates/i);
  expect(button).toBeInTheDocument();
});

test('renders the Black Magic logo in the header', () => {
  render(<App />);
  const logo = screen.getByTitle(/black magic/i);
  expect(logo).toBeInTheDocument();
});

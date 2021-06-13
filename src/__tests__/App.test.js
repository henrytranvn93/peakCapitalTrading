import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders app and title of the app correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/time and sales/i);
  expect(linkElement).toBeInTheDocument();
});

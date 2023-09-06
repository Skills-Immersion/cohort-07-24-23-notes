import { render, screen } from '@testing-library/react';
import App from './App';

// our human-readable description of what this test is trying to do
test('renders Cheese! heading', () => {
  // render the App component
  render(<App />);
  // try to find an element that contains the text "Cheese!"
  // the slashes around "Cheese!" are making a regular expression
  // a regex lets us check if some text matches a pattern
  const linkElement = screen.getByText(/Cheese!/i);
  // make sure that element is in the document, AKA on the page.
  expect(linkElement).toBeInTheDocument();
});

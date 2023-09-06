import { render, screen } from '@testing-library/react';
import Cheese from './Cheese';

test('cheddar is the best cheese', () => {
  // render my Cheese component and pass in the values I'm trying to test for the props
  let cheeseData = { name: 'cheddar', imageUrl: 'abc.com' }
  render(<Cheese cheese={cheeseData} />)
  // make sure it says "the best cheese"
  const theBestCheese = screen.getByText(/the best cheese/);
  expect(theBestCheese).toBeInTheDocument();
  // make sure it does not say "not everyone's favorite"
  const notEveryonesFavorite = screen.queryByText(/not everyone's favorite/);
  expect(notEveryonesFavorite).not.toBeInTheDocument();
})
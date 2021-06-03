import React from 'react';
import { getAllByTestId, render } from '@testing-library/react';
import Home from '../components/Home';

let container = null;

beforeEach(() => {
  container = render(<Home />).container;
});

it('should show homes', () => {
  console.log('grabing homes');
  const homes = getAllByTestId(container, 'homes');
  expect(homes.length).toBeGreaterThan(0);
});

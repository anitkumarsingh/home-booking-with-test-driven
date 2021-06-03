import React from 'react';
import { act, getAllByTestId, render } from '@testing-library/react';
import Home from '../components/Home';

let container = null;

beforeEach(async () => {
  container = render(<Home />).container;
  await act(async () => {});
});

it('should show homes', () => {
  console.log('grabing homes');
  const homes = getAllByTestId(container, 'homes');
  expect(homes.length).toBeGreaterThan(0);
});

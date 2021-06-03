import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import Header from '../components/Header';

let container = null;

beforeEach(() => {
  container = render(<Header />).container;
});

it('should show logo', () => {
  expect(getByTestId(container, 'logo')).toBeTruthy();
});

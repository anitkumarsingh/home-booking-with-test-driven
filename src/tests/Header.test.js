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

it('should show search', () => {
  expect(getByTestId(container, 'search')).toBeTruthy();
});

it('should show menu', () => {
  expect(getByTestId(container, 'menu')).toBeTruthy();
});

it('should show filter', () => {
  expect(getByTestId(container, 'home-type')).toBeTruthy();
  expect(getByTestId(container, 'date')).toBeTruthy();
  expect(getByTestId(container, 'price')).toBeTruthy();
  expect(getByTestId(container, 'guest')).toBeTruthy();
  expect(getByTestId(container, 'room')).toBeTruthy();
  expect(getByTestId(container, 'amenities')).toBeTruthy();
});

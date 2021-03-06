import React from 'react';
import {
  act,
  getAllByTestId,
  getNodeText,
  render
} from '@testing-library/react';
import Home from '../components/Home';
import apiClient from '../services/apiClient';

let container = null;

beforeEach(async () => {
  jest.spyOn(apiClient, 'getHomes').mockImplementation(() => {
    return Promise.resolve([
      {
        title: 'Test title 1',
        content: 'This is test content',
        location: 'Test location 1',
        price: 12
      },
      {
        title: 'Test title 2',
        content: 'This is test content 2',
        location: 'Test location 2',
        price: 124
      },
      {
        title: 'Test title 3',
        content: 'This is test content 3',
        location: 'Test location 3',
        price: 54
      },
      {
        title: 'Test title 4',
        content: 'This is test content 4',
        location: 'Test location 4',
        price: 43
      }
    ]);
  });
  container = render(<Home />).container;
  await act(async () => {});
});

it('should show homes', () => {
  const homes = getAllByTestId(container, 'homes');
  expect(homes.length).toBeGreaterThan(0);
});

it('should show home title', () => {
  const homesTitle = getAllByTestId(container, 'home-title');
  expect(getNodeText(homesTitle[0])).toBe('Test title 1');
});
it('should show image', () => {
  const homeImg = getAllByTestId(container, 'img');
  expect(homeImg).toBeTruthy();
});
it('should show location', () => {
  const loc = getAllByTestId(container, 'home-loc');
  expect(getNodeText(loc[0])).toBe('Test location 1');
});

it('should show price', () => {
  const price = getAllByTestId(container, 'price');
  expect(getNodeText(price[0])).toBe('12');
});

import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

// test('renders app', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Start test/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

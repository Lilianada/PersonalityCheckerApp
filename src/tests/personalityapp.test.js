import React from 'react';
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import QtnAnswer from '../components/QuestionsAnswer/QtnAns';
import { renderWithRouter, JestfindText } from "./utils/base"
import HomeBody from '../pages/Home/HomeBody';
import { Options, Result } from '../components/QuestionsAnswer/QAstyles';



test('QtnAnswer should render', async () => {
  renderWithRouter(<QtnAnswer />);
  expect(await JestfindText(screen, 'All questions are required')).toBeInTheDocument();
});

test('HomeBody should render',async  () => {
  renderWithRouter(<HomeBody />);
  expect(await JestfindText(screen, 'Start test')).toBeInTheDocument();
  
});

test('HomeBody should not find the element',async  () => {
  renderWithRouter(<HomeBody />);
  const result = await JestfindText(screen, 'Start Personality test. It would be eye opening');
  expect(result).not.toBeInTheDocument();
  
});


test('Button moves to the next question on click', () => {
  render(<QtnAnswer />);
  const start = screen.getByTestId("start-button");
  fireEvent.click(start);
  expect(screen.getByTestId("start-button")).toBeTruthy();

});



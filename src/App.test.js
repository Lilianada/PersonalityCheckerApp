import { render, screen } from '@testing-library/react';
import App from './App';
import QtnAnswer from './components/QuestionsAnswer/QtnAns';



test('renders question', () => {
  render(<QtnAnswer />);
  const linkElement = screen.getByText(/Start test/i);
  expect(linkElement).toBeInTheDocument();
});

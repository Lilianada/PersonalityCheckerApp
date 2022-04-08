import { render, screen } from '@testing-library/react';
import App from './App';
import QtnAnswer from './components/QuestionsAnswer/QtnAns';
import Home from './pages/Home/Home';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders test', () => {
//   render(<QtnAnswer />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("reders home correctly", () => {
//   render(<Home/>);
//   const linkElement = screen.g
// } )
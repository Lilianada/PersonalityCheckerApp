import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import '@testing-library/jest-dom/extend-expect'


    const root = createRoot(document.body.appendChild(document.createElement("div")));

export const renderWithRouter = (ui) => {
  //return root.render(<BrowserRouter>{ui}</BrowserRouter>)
  return render(<BrowserRouter>{ui}</BrowserRouter>)
}

export function JestfindText(screen, searchString) {
  return screen.queryByText((content, node) => {
    const hasText = (node) => node.textContent === searchString;
    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node.children).every(
      (child) => !hasText(child)
    );

    return nodeHasText && childrenDontHaveText;
  });
}
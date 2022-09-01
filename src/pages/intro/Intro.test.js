import { render, screen } from '@testing-library/react';
import Intro from './Intro';

it('should render same text passed into title prop', () => {
  render(<Intro />);
  const headingElement = screen.getByRole('heading', {
    name: /a full-stack web developer/i,
  });
  expect(headingElement).toBeInTheDocument();
});

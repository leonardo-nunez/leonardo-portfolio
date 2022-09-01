import { render, screen } from '@testing-library/react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import Project from './Project';

it('should render same text passed into title prop', () => {
  render(<Project title={'CIN CIN'} />);
  mockAllIsIntersecting(true);
  const headingElement = screen.getByRole('heading', {
    name: /cin cin/i,
  });
  expect(headingElement).toBeInTheDocument();
});

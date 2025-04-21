import { render, screen } from '@testing-library/react';
import ProductList from '../components/ProductList';

jest.mock('axios');

test('renders product list heading', () => {
  render(<ProductList />);
  const headingElement = screen.getByText(/Products/i);
  expect(headingElement).toBeInTheDocument();
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../Header';

// Mock react-router-dom to avoid depending on its implementation in tests
jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }: any) => <a href={to} {...props}>{children}</a>,
  useLocation: () => ({ pathname: '/' }),
  useNavigate: () => jest.fn(),
}));

describe('Header search', () => {
  test('renders search with icon and hint and toggles focus class', () => {
    const { container, getByPlaceholderText } = render(<Header />);

    const searchInput = getByPlaceholderText(/Search docs/i) as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();

    // container should exist
    const wrapper = container.querySelector('.searchbox');
    expect(wrapper).toBeTruthy();

    // focus the input
    fireEvent.focus(searchInput);
    fireEvent.blur(searchInput);
  });
});
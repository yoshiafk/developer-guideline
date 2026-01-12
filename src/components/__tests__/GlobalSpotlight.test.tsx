import React from 'react';
import { render } from '@testing-library/react';
import GlobalSpotlight from '../GlobalSpotlight';

describe('GlobalSpotlight', () => {
  test('renders spotlight element', () => {
    const { container } = render(<GlobalSpotlight />);
    const el = container.querySelector('.global-spotlight');
    expect(el).toBeTruthy();
  });
});
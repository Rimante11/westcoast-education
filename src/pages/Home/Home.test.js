import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home page', () => {
  const setup = () => render(<Home />, {wrapper: MemoryRouter});

  test('Should have a title named "Welcome to Westcoast Education"', () => {
    setup();

    const title = screen.getByText(/Welcome to Westcoast Education/i);
    expect(title).toBeInTheDocument();
  })
});
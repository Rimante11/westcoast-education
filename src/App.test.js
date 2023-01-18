import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Routing', () => {
  const setup = () => render(<App />);

  test('Navigation and rendering correct component', async () => {
    setup();

    expect(screen.getByText(/Welcome to Westcoast Education/i)).toBeInTheDocument();

    await userEvent.click(screen.getByText('Our courses that are available at the moment'));
    expect(screen.getByText(/Our courses that are available at the moment/i)).toBeInTheDocument();

    await userEvent.click(screen.getByText('Teachers that are passionate about their subjects'));
    expect(screen.getByText(/Teachers that are passionate about their subjects/i)).toBeInTheDocument();

  });
});

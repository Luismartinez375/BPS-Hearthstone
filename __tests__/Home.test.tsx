import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    // Other router properties and methods you use in your component
  })),
}));

it('should render the homepage', () => {
  render(<Home />);
  const myElement = screen.getByText('Druid');

  expect(myElement).toBeInTheDocument();
});

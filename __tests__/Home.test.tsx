import Home from '@/app/page';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';



const pushMock = jest.fn();



useRouter
it('should render the homepage', () => {
    jest.mock('next/router', () => ({
        useRouter: jest.fn()
    }) )
    render(<Home />); // ARRANGE
    const myElement = screen.getByText('Druid'); // ACT

    expect(myElement).toBeInTheDocument(); // ASSERT
});
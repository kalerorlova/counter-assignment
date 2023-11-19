// import necessary react testing library helpers here
// import the Counter component here
import Counter from "../components/Counter";

import {fireEvent, render, screen} from "@testing-library/react";
import App from "../components/App";

beforeEach(() => {
  // Render the Counter component here
    render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    const counterMessage = screen.getByText(/Counter/i);
    expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    const initialCount = screen.getByTestId('count');
    expect(initialCount.textContent).toBe('0');
});

test('clicking + increments the count', () => {
    const incrementButton = screen.getByText('+');
    const count = screen.getByTestId('count');
    const initialCount = parseInt(count.textContent);
    fireEvent.click(incrementButton);
    const updatedCount = parseInt(count.textContent);
    expect(updatedCount).toEqual(initialCount + 1);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    const decrementButton = screen.getByText('-');
    const count = screen.getByTestId('count');
    const initialCount = parseInt(count.textContent);
    fireEvent.click(decrementButton);
    const updatedCount = parseInt(count.textContent);
    expect(updatedCount).toEqual(initialCount - 1);
});

import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Home from "../../components/Home";

test("Home Rendering Tests", () => {
  // render the App component
  render(<Home />); 
  
  // save the heading in a variable
  const heading = screen.getByTestId("restaurantName"); 
  // test assumption
  expect(heading).toHaveTextContent("Little Lemon");

  const heading2 = screen.getByTestId("testimonials");
  expect(heading2).toHaveTextContent("Our loyal customers say ...");
});

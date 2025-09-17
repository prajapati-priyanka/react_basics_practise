import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart/Cart";
import "@testing-library/jest-dom";

test("Should render Cart Page", () => {
  render(<Cart />);

  //Quering
  const heading = screen.getByRole("heading");

  // Assertion
  expect(heading).toBeInTheDocument();
});

test("Should render submit button", () => {
  render(<Cart />);

  //Quering
  const button = screen.getByRole("button");

  // Assertion
  expect(button).toBeInTheDocument();
});
test("Should get submit button text", () => {
  render(<Cart />);

  //Quering
  const button = screen.getByText("Submit");

  // Assertion
  expect(button).toBeInTheDocument();
});

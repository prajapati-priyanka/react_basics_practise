import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";

it("Should render Header component with login button", () => {
  render(<Header />, { wrapper: BrowserRouter });

  const heading = screen.getByRole("button", { name: "Login" }); // if there are multiple buttons and specifies name of the button
  expect(heading).toBeInTheDocument();
});
it("Should render Header component with Cart Text", () => {
  render(<Header />, { wrapper: BrowserRouter });

  const heading = screen.getByText(/Cart/); //regex which just see the Cart text.
  expect(heading).toBeInTheDocument();
});
it("Should change login button to logout when clicked", () => {
  render(<Header />, { wrapper: BrowserRouter });

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});

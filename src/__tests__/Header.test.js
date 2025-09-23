import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";

it("Should render Header component with login button", () => {
  render(<Header />, { wrapper: BrowserRouter });

    const heading = screen.getByRole("button",{name: "Login"});
    expect(heading).toBeInTheDocument();
});

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Example from "../useStateCallback.example";

describe("useStateCallback.js", () => {
  it("should fire cb after state has changed", () => {
    render(<Example />);
    const incrementButton = screen.getByText(/increment/i);
    expect(incrementButton).toHaveTextContent(`Increment`);
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("should render the main heading", () => {
    render(<App />);

    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  it("should render the Count component", () => {
    render(<App />);

    expect(
      screen.getByRole("button", { name: /count is 0/i }),
    ).toBeInTheDocument();
  });

  it("should render logos", () => {
    render(<App />);

    expect(screen.getByAltText("Vite logo")).toBeInTheDocument();
    expect(screen.getByAltText("React logo")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import Footer from "./components/Footer";

test("Renders the footer", function () {
  render(<Footer />);
  const footer = screen.getByText("Social Media Links");
  expect(footer).toBeInTheDocument();
});

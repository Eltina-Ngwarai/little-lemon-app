import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders reservation button", function () {
  render(<BookingForm />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
test("Renders number of guests label", function () {
  render(<BookingForm />);
  const label = screen.getByText("Number of Guests:");
  expect(label).toBeInTheDocument();
});
test("Renders time booking element", function () {
  render(<BookingForm />);
  const bookedTimeElement = screen.getByTestId("book-time");

  expect(bookedTimeElement).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import ContactForm from "../Contact"; // Make sure you're importing the correct component
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  it("should load the Contact Us component", () => {
    render(<ContactForm />);
    
    const heading = screen.getByRole("heading", { name: /contact us/i });
    
    // assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load the 'Send Message' button inside ContactForm component", () => {
    render(<ContactForm />);
    
    const button = screen.getByText("Send Message");
    
    expect(button).toBeInTheDocument();
  });

  it("should load the input field for name inside ContactForm component", () => {
    render(<ContactForm />);
    
    const inputName = screen.getByPlaceholderText("Your Name");
    
    expect(inputName).toBeInTheDocument();
  });

  it("should load 3 input boxes on the ContactForm component", () => {
    render(<ContactForm />);
    
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(3);
  });
});

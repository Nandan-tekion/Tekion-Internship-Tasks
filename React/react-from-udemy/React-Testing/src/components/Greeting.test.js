import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("Check for Hello World! as text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    // ....

    //Assert

    const textElement = screen.getByText("Hello World", { exact: false });

    expect(textElement).toBeInTheDocument();
  });

  test("Check for text before button clicked" , () => {
    render(<Greeting />);

    const textElement = screen.getByText("good to see you", { exact: false });

    expect(textElement).toBeInTheDocument();
  });

  test("renders 'Changed!' on Button Click" , () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const textElement = screen.getByText("Changed!");

    expect(textElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' on Button Click" , () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const textElement = screen.queryByText("good to see you", {exact : false});

    expect(textElement).toBeNull();
  });
});

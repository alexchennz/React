import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe('Greeting Component', () =>{
    test('renders hello world', ()=>{
        render(<Greeting />);
        const greetingElement = screen.getByText("Hello World");
        expect(greetingElement).toBeInTheDocument();
    })
    test('renders nice to see you when button NOT clicked', ()=>{
        render(<Greeting />);
        const textElement = screen.getByText("nice to see you", {exact: false})
        expect(textElement).toBeInTheDocument();
    })
    test('renders "Changed" when button clicked', ()=>{
        //Arrange
        render(<Greeting />);

        //Action
        const clickButton = screen.getByRole("button");
        userEvent.click(clickButton);

        //Assert
        const outputElement = screen.getByText("Changed!");
        expect(outputElement).toBeInTheDocument();
    })
    test("hides nice to see you when button clicked", ()=>{
        render(<Greeting />);

        const button =  screen.getByRole("button");
        userEvent.click(button);

        const outputElement = screen.queryByText('nice to see you', {exact: false});
        expect(outputElement).toBeNull();
    })
});

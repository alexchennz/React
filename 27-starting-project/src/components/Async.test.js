import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async components', ()=>{
    test('renders list items on page load', async ()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async ()=>[{id: "m1", title:"the title"}]
        });
        render(<Async />);

        const listItemElement = await screen.findAllByRole('listitem');
        expect(listItemElement).not.toHaveLength(0);
    });
});
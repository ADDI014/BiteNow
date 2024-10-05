import { render, screen, act } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
// Mock the global fetch function
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    });
});

it("Should render the Body component with the search button", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });

    // Debug the DOM to see what's rendered
    screen.debug();

    const searchButton = screen.getByRole("button", { name: "Search" });
    
    expect(searchButton).toBeInTheDocument();
});


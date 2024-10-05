import { render , screen } from "@testing-library/react"
import RestaurantCard, {withPromotedLabel} from "../RestaurentCard";
import MOCK_DATA from "../mocks/restaurentCardMock.json";
import "@testing-library/jest-dom";
// it("should render Restaurent component with props Data" , () => {
//     render(<RestaurantCard resData={MOCK_DATA}/>);

//     const name = screen.getByText("KFC");

//     expect(name).toBeInTheDocument();
// });



it("should render Restaurant component with props Data", () => {
    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
    render(<PromotedRestaurantCard resData={MOCK_DATA} />);
    
    // Debug the rendered output
    screen.debug();

    const costForTwoLabel = screen.getByText("₹500 for two");

    expect(costForTwoLabel).toBeInTheDocument();
});



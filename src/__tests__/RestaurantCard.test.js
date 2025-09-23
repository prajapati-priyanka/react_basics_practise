import { MOCK_JSON } from "../__mocks__/restaurantCardMock";
import RestaurantCard from "../components/RestaurantCard";
import {screen,render} from "@testing-library/react";
import "@testing-library/jest-dom";


it("Should render Restarant Card with Props Data", ()=>{
render(<RestaurantCard resData = {MOCK_JSON}/>)

const resName = screen.getByText("Adil Hotel");
expect(resName).toBeInTheDocument()
});
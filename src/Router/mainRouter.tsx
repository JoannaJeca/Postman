import { createBrowserRouter } from "react-router-dom";
import Layout from "../Static/Layout";
import HomeScreen from "../Static/HomeScreen";
import Pricing from "../Pages/Pricing";
// import ProductDropdown from "../DropDown/ProductDropdown";

export const mainRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:([
            {
                index:true,
                element:<HomeScreen/>
            }
        ])
    },
    {
        path:"/pricing",
        element:<Pricing/>
    }
])
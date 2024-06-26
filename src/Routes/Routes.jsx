import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Pages/Home/Home/Home";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])
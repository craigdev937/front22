import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Header } from "./Header";
import { Home } from "../pages/home/Home";
import { Destination } from "../pages/dest/Destination";
import { Crew } from "../pages/crew/Crew";
import { Technology } from "../pages/tech/Technology";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <NotFound />
            },
            {
                path: "/dest",
                element: <Destination />,
                errorElement: <NotFound />
            },
            {
                path: "/crew",
                element: <Crew />,
                errorElement: <NotFound />
            },
            {
                path: "tech",
                element: <Technology />,
                errorElement: <NotFound />
            }
        ]
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};


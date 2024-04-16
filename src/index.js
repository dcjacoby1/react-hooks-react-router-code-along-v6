import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);


//without const router and const route, this would work... 
//but only be a one pager with home:

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Home />);
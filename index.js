import ReactDOM from "react-dom/client";
import { App } from "./src/App";
import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./src/components/Main/Main";
import Wishlist from "./src/components/Wishlist/Wishlist";
import Cart from "./src/components/Cart/Cart";
import NotFound from "./src/components/NotFound";
import Profile from "./src/components/Profile/Profile";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

const appRoutes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Main,
      },
      {
        path: "/wishlist",
        Component: Wishlist,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/profile",
        Component: Profile,
      },
    ],
    errorElement: <NotFound />
   
  },
]);

root.render(
  <RouterProvider router={appRoutes} />
  
);

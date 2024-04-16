import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";

const routes = [
    {
      path: "/",
      element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/login',
        element: <Login />  
    },
    {
        //:id is a url parameter to plug in an id
        path: "/profile/:id",
        element: <UserProfile />
    }

  ]

  export default routes
import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import TopNav from "./components/TopNav";
import AddBooks from "./pages/AddBooks";
import ManageBooks from "./pages/ManageBooks";
import SignIn from "./pages/SignIn";
// import SideNav from './components/SideNav';

import SideNav from "./components/SideNav";
import BookRequests from "./pages/BookRequests";

const Layout = () => {
  return (
    <>
      <TopNav />
      <SideNav />
      <Outlet/>
    </>
  );
};

const router = createBrowserRouter([
  {path: "/",
element: <Layout/>,
children: [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/manage-books",
    element: <ManageBooks />,
  },
  {
    path: "/add-book",
    element: <AddBooks />,
  },
  {
    path: "/book-requests",
    element: <BookRequests />,
  }
]
}
  
]);

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

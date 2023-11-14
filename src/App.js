import "./App.css";
import "./Table.css"
import Home from "./pages/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import TopNav from "./components/TopNav";
import AddBooks from "./pages/AddBooks";
import ManageBooks from "./pages/ManageBooks";
import SignIn from "./pages/SignIn";
// import SideNav from './components/SideNav';
import SignUp from './pages/SignUp'

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
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/login",
    element: <SignUp />,
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
  },
  {
    path:"/librarian-login",
    element: <SignIn/>
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

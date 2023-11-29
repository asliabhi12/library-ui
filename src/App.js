import "./App.css";
import "./Table.css"
import Home from "./pages/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import TopNav from "./components/TopNav";
import AddBooks from "./pages/AddBooks";
import ManageBooks from "./pages/ManageBooks";
import SignUp from "./pages/Signup";
// import SideNav from './components/SideNav';
import Login from './pages/Login'
import Update from './pages/Update'
import CreateLibrary from "./pages/CreateLibrary";
import SideNav from "./components/SideNav";
import BookRequests from "./pages/BookRequests";
import Libraries from './pages/Libraries'
import IssueRegistry from './pages/IssueRegistry'

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
    element: <Home/>
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
    path: "/issue-registry",
    element: <IssueRegistry/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/signup",
    element: <SignUp/>
  },
  {
    path:"/update/:id",
    element:<Update/>
  },
  {
    path:'/create-library',
    element: <CreateLibrary/>
  },
  {
    path:"/libraries",
    element: <Libraries/>
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

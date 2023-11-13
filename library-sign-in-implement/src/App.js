import './App.css';
import Home from './pages/Home'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import TopNav from './components/TopNav';
import AddBooks from './pages/AddBooks';
import ManageBooks from './pages/ManageBooks';
// import SideNav from './components/SideNav'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
  // }, 
  // {
  //   path: "/register",
  //   element: <Register/>
  // },
  // {
  //   path: "/login",
  //   element: <Login/>,
  // },
  ,{
    path: "/manage-books",
    element: <ManageBooks/>
  },
  , {
    path: "/add-book",
    element: <AddBooks/>
  }
])

function App() {
  return (
    <div className="App" >
      <TopNav/>
      {/* <SideNav/> */}
      {/* <Home /> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

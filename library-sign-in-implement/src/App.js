import './App.css';
import Home from './pages/Home'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import TopNav from './components/TopNav';
import AddBooks from './pages/AddBooks';
import ManageBooks from './pages/ManageBooks';
import {Provider} from 'react-redux'
import {store} from './app/store'
import Todos from './components/Todos';

// import SideNav from './components/SideNav'

import AddTodo from './components/AddTodo';

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
  // ,{
  //   path: "/login",
  //   element: <AddTodo/>,
  // }
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
      <Provider store={store}>
      <TopNav/>
      <AddTodo/>
      {/* <SideNav/> */}
      {/* <Home /> */}
      <Todos/>
      <RouterProvider router={router}/>
      </Provider>
    </div>
  );
}

export default App;

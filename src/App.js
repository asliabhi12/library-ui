import './App.css';
import Home from './components/Home'
import TopNav from './components/TopNav';
import AddBooks from './pages/AddBooks';
// import SideNav from './components/SideNav'

function App() {
  return (
    <div className="App" >
      <TopNav/>
      <AddBooks/>
      {/* <SideNav/> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;

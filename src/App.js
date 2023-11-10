import './App.css';
import Home from './components/Home'
import TopNav from './components/TopNav';
import SideNav from './components/SideNav'

function App() {
  return (
    <div className="App" >
      <TopNav/>
      <SideNav/>
      <Home />
    </div>
  );
}

export default App;

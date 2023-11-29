import axios from "axios";
import { useState} from "react";
import { Link } from "react-router-dom";

function SideNav() {
  const [isClosed, setClosed] = useState(false);

  const handleTrigger = () => setClosed(!isClosed);

  const logout = () => {
    
    axios.post("/logout").then(function(response){
      alert("user logged out successfully", response)
      setClosed(false)
      localStorage.removeItem("libId")
      localStorage.removeItem("role")
      localStorage.removeItem("contactNumber")
      localStorage.removeItem("email")
      localStorage.removeItem("name")
    }).catch(function(err){
      alert(err)
    })
  }

  return (
    <>
      <span
        style={{ fontSize: "30px", cursor: "pointer" }}
        className="sidenav-ham"
        id="ham-burger"
        onClick={handleTrigger}
      >
        &#9776;
      </span>

      <div id="mySidenav" class={`sidenav ${isClosed ? "sidebar--open":"sidebar--closed"}`}>
        <span style={{color: "#ffff", cursor: "pointer" }}
          class="closebtn"
          
          onClick={handleTrigger}
        >
          &times;
        </span>
          
              <ul>
              <li>
              <Link to="/" onClick={()=>setClosed(false)}>Home</Link> </li>)
          
        <Link to="/manage-books" onClick={()=>setClosed(false)}>Manage Books</Link>
        <Link to="/book-requests" onClick={()=>setClosed(false)}>Books Requested</Link>
        <Link to="/login" onClick={()=>setClosed(false)}>Login/Sign Up</Link>
        <Link to="/" onClick={logout}>Log Out</Link>

        </ul>
      </div>
    </>
  );
}

export default SideNav;

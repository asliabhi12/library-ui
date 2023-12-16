import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";



function SideNav() {
  const [isClosed, setClosed] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const handleTrigger = () => setClosed(!isClosed);
const navigate = useNavigate()
  

  const logout = () => {

    axios.post("/logout").then(function (response) {
      navigate("/login")
      localStorage.removeItem("libId")
      localStorage.removeItem("role")
      localStorage.removeItem("contactNumber")
      localStorage.removeItem("email")
      localStorage.removeItem("name")
      setClosed(false)
      window.location.reload();

    }).catch(function (err) {
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

      <div id="mySidenav" class={`sidenav ${isClosed ? "sidebar--open" : "sidebar--closed"}`}>
        <span style={{ color: "#ffff", cursor: "pointer" }}
          class="closebtn"

          onClick={handleTrigger}
        >
          &times;
        </span>
        {/* for the admin role */}
        {currentUser?.role === "admin" &&
          <ul>
            <Link to="/" onClick={() => setClosed(false)}>Home</Link>
            <Link to="/manage-books" onClick={() => setClosed(false)}>Manage Books</Link>
            <Link to="/book-requests" onClick={() => setClosed(false)}>Books Requested</Link>
            <Link to="/issue-registry" onClick={() => setClosed(false)}>Issue Request</Link>

          </ul>
        }
        {/* for the owner role */}
        {currentUser?.role === "owner" &&
          <ul>
            <Link to="/" onClick={() => setClosed(false)}>Home</Link>
            <Link to="/create-library" onClick={() => setClosed(false)}>Create Library</Link>
            <Link to="/libraries" onClick={() => setClosed(false)}>All Libraries</Link>

          </ul>
        }
        {/* for the reader role */}
        {currentUser?.role === "reader" &&
          <ul>
            <Link to="/" onClick={() => setClosed(false)}>Home</Link>
            <Link to="/request-book" onClick={() => setClosed(false)}>Requested Books</Link>
          </ul>
        }
        {currentUser?.name ? <Link to="/" onClick={logout}>Log Out</Link> : <Link to="/login" onClick={() => setClosed(false)}>Login/Sign Up</Link>}



      </div >
    </>
  );
}

export default SideNav;

import { useState} from "react";
import { Link } from "react-router-dom";

function SideNav() {
  const [isClosed, setClosed] = useState(true);

  const handleTrigger = () => setClosed(!isClosed);

  return (
    <>
      <i
        style={{ fontSize: "30px", cursor: "pointer" }}
        className="sidenav-ham"
        id="ham-burger"
        onClick={handleTrigger}
      >
        &#9776;
      </i>

      <div id="mySidenav" class={`sidenav ${isClosed ? "sidebar--open":"sidebar--closed"}`}>
        <i style={{color: "#ffff"}}
          class="closebtn"
          onClick={handleTrigger}
        >
          &times;
        </i>
        <ul>
            <li>
          <Link to="/">Home</Link> </li>
        <Link to="/manage-books">Manage Books</Link>
        <Link to="/">Books Requested</Link>
        <Link to="/login">Settings</Link>
        </ul>
      </div>
    </>
  );
}

export default SideNav;

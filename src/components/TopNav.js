import { useContext} from "react";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";


function TopNav() {
    const { currentUser } = useContext(AuthContext);
  return (
    
    <nav id = "top-nav" >
        <div class="left-nav">
            <div class="logo">
                <Link to="/"><img src="./images/lm-logo.png" alt="" srcset="" /></Link>
                
            </div>
            <div class="nav-buttons">
                <p id="hello-text">{currentUser?.name?"Hello, "+currentUser?.name:"Please Login"}</p>
            </div>
        </div>
       
    </nav>
  );
}

export default TopNav
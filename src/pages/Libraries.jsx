import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import "./libraries.css";

function Home() {
  const { currentUser } = useContext(AuthContext);
  const [libraries, setLibraries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/library");
        setLibraries(res.data.libraries);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="main">
      <div class="books">
        <div class="grid">
          {Array.isArray(libraries) ? (
            <div className="library-list">
              {libraries.map((library) => (
                <div className="library-item" key={library.id}>
                  <div className="library-card">
                    <div className="library-title">
                      <span>{library.name}</span>
                    </div>
                    {currentUser.role === "owner" && (
                      <div className="library-action">
                        <span>Delete</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>You aren't the owner</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

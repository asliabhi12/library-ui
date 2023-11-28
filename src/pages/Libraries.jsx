import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
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
            libraries.map((library) => (
              <div class="cell" key={libraries.id}>
                <div class="book-card">
                  <img src={`./images/book-covers/2.png`} alt="" />
                  <div class="book-title">
                    <span>{library.name}</span>
                  </div>
                  <div
                    class="book-title"
                    style={{ backgroundColor: "#696969", marginTop: "1.2rem" }}
                  >
                    <span>Request</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            alert("you aren't owner")
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

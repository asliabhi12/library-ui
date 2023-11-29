import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import "./card.css"

function Home() {
  const { currentUser } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/books");
        setBooks(res.data.books);
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
          {/* {Array.isArray(books) ? (
            books.map((book) => (
              <div class="cell" key={book.isbn}>
                <div class="book-card">
                  <img src={`./images/book-covers/2.png`} alt="" />
                  <div class="book-title">
                    <span>{book.title}</span>
                  </div>
                  {currentUser.role==="reader"&& <div
                    class="book-title"
                    style={{ backgroundColor: "#696969", marginTop: "1.2rem" }}
                  >
                   <span>Request</span>
                  </div>}
                </div>
              </div>
            ))
          ) : (
            <p>No books available</p>
          )} */}
          <div class="card">
            <img src="./images/book-covers/2.png" class="image"></img>
            <span class="title">something in span</span>
            <span class="price">1.0102</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

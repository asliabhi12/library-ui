import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import "./card.css";

function Home() {
  const { currentUser } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
      <div className="search-bar-container">
        <div class="search-bar">
          <img src="./images/search-icon.png" alt="" srcset="" />
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            style={{ "width": "80%", "boxSizing": "border-box", "border": "none",
            "outline": "none",
            "background": "transparent",
            "margin-left":"15px",
            "fontSize":"1.5em"
          }}
            onChange={(event) => {
              setSearchTerm(event.target.value);
              
            }}
          />
        </div>
      </div>
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
                  {currentUser.role === "reader" && (
                    <div
                      class="book-title"
                      style={{
                        backgroundColor: "#696969",
                        marginTop: "1.2rem",
                      }}
                    >
                      <span>Request</span>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No books available</p>
          )} */}

          {Array.isArray(books) ? (
            books
              .filter((book) => {
                if (searchTerm === "") {
                  return book;
                } else if (
                  book.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return book;
                }
              })
              .map((book) => (
                <div className="cell" key={book.isbn}>
                  <div className="book-card">
                    <img src={`./images/book-covers/2.png`} alt="" />
                    <div className="book-title">
                      <span>{book.title}</span>
                    </div>
                    {currentUser.role === "reader" && (
                      <div
                        className="book-title"
                        style={{
                          backgroundColor: "#696969",
                          marginTop: "1.2rem",
                        }}
                      >
                        <span>Request</span>
                      </div>
                    )}
                  </div>
                </div>
              ))
          ) : (
            <p>No books available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

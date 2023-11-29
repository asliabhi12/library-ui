import { useEffect, useState } from "react";
import axios from "axios";
import { useContext} from "react";
import { AuthContext } from "../context/authContext";

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
          {Array.isArray(books) ? (
            books.map((book) => (
              <div class="cell" key={book.isbn}>
                <div class="book-card">
                  <img src={`./images/book-covers/2.png`} alt="" />
                  <div class="book-title">
                    <span>{book.title}</span>
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
            <p>No books available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function ManageBooks() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (isbn) => {
    // Send DELETE request to "/book" with ISBN in the request body
    axios
      .delete(`/book/${isbn}`)
      .then((response) => {
        alert("Book deleted successfully");
        var newList = books.filter((books) => books.isbn != isbn);
        setBooks(newList);
      })
      .catch((error) => {
        alert("Error occurred", error);
      });
  };

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
      <h2
        class="main-heading"
        style={{ marginLeft: "8rem", marginBottom: "30px" }}
      >
        Manage Books
      </h2>
      <div class="manage-books">
        <div
          className="add-book-button"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/add-book")}
        >
          {" "}
          + ADD Book
        </div>
        {books.map((book) => (
          <div class="manage-block" key={book.isbn}>
            <div class="manage-left">
              <div class="manage-icons">
                <div class="manage-icon">
                  <Link to={"/update/" + book.isbn}>
                    <img src="./images/pen.png" alt="" srcset="" />
                  </Link>
                </div>
                <div class="manage-icon" style={{ cursor: "pointer" }}>
                  <img
                    src="./images/trash.png"
                    onClick={() => handleDelete(book.isbn)}
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div class="manage-book-title">
                <p>{book.title}</p>
              </div>
            </div>
            <div class="manage-right">
              Available : {book.availableCopies}/{book.totalCopies}
            </div>
          </div>
        ))}
      </div>
      <span>Lib Id: 4564786</span>
    </div>
  );
}

export default ManageBooks;

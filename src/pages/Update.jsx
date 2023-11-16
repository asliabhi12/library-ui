import { useFormik } from "formik";

import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

function UpdateBooks() {
  const params = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/book/${params.id}`);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [params.id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: books.title || "",
      ISBN: books.isbn || "", // Update this line
      author: books.author || "",
      publisher: books.publisher || "",
      version: books.version || "",
      totalNumber: books.totalCopies || "",
    },

    onSubmit: (values) => {
      const updatedBook = {
        LibID: 1,
        title: values.title,
        ISBN: Number(values.ISBN),
        author: values.author,
        publisher: values.publisher,
        version: values.version,
        totalNumber: Number(values.totalNumber),
      };
    
      axios({
        method: "PUT", // Change the method to PUT
        url: `/book/${values.ISBN}/asliabhi12@gmail.com`, // Use the book's identifier (e.g., ISBN) in the URL
        data: updatedBook,
      })
        .then(function (res) {
          console.log(res);
          alert("Successfully updated this book!");
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    
  });
  return (
    <div id="main">
      <div class="add-book-form">
        <div class="add-book-left">
          <div class="add-book-cover">
            <div class="circle">+</div>
          </div>
          <div class="add-book-cover-txt">
            <h4>Add a book Cover Art</h4>
          </div>
        </div>
        <div class="add-book-right">
          <div class="container">
            <div class="text">Update Book</div>
            <form onSubmit={formik.handleSubmit}>
              <div class="form-row">
                <div class="input-data">
                  <input
                    id="title"
                    name="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    type="text"
                    required
                  />
                  <div class="underline"></div>
                  <label for="">Title</label>
                </div>
                <div class="input-data">
                  <input
                    id="author"
                    name="author"
                    onChange={formik.handleChange}
                    value={formik.values.author}
                    type="text"
                    required
                  />
                  <div class="underline"></div>
                  <label for="">Author</label>
                </div>
              </div>
              <div class="form-row">
                <div class="input-data">
                  <input
                    id="publisher"
                    name="publisher"
                    onChange={formik.handleChange}
                    value={formik.values.publisher}
                    type="text"
                    required
                  />
                  <div class="underline"></div>
                  <label for="">Publisher</label>
                </div>
                <div class="input-data">
                  <input
                    id="version"
                    name="version"
                    onChange={formik.handleChange}
                    value={formik.values.version}
                    type="text"
                    required
                  />
                  <div class="underline"></div>
                  <label for="">Version</label>
                </div>
              </div>
              <div class="form-row">
                <div class="input-data">
                  <input
                    id="ISBN"
                    name="ISBN"
                    onChange={formik.handleChange}
                    value={formik.values.ISBN}
                    type="Number"
                    required
                  />
                  <div class="underline"></div>
                  <label for="">ISBN</label>
                </div>
                <div class="input-data">
                  <input
                    id="totalNumber"
                    name="totalNumber"
                    onChange={formik.handleChange}
                    value={formik.values.totalNumber}
                    type="number"
                    required
                  />
                  <div class="underline"></div>
                  <label for="">Total Books</label>
                </div>
              </div>
              <div class="form-row submit-btn">
                <div class="input-data" id="add-book-btn">
                  <div class="inner"></div>
                  <input type="submit" value="Update Book" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateBooks;

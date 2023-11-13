import { useFormik } from "formik";

function AddBooks() {
  const formik = useFormik({
    initialValues: {
      title: "",
      ISBN: "",
      author: "",
      publisher: "",
      version: "",
      totalNumber: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div id="main">
      <span
        style={{ "font-size": "30px", cursor: "pointer" }}
        id="ham-burger"
        onclick="openNav()"
      >
        &#9776;
      </span>
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
            <div class="text">Add Book</div>
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
                    type="text"
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
                    type="text"
                    required
                  />
                  <div class="underline"></div>
                  <label for="">Total Books</label>
                </div>
              </div>
              <div class="form-row submit-btn">
                <div class="input-data">
                  <div class="inner"></div>
                  <input type="submit" value="Add Book" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBooks;

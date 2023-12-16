import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import axios from "axios";

function RequestBook() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [message, setMessage] = useState("");
  const [books, setBooks] = useState([]);
  const getStatusColor = (requestType) => {
    switch (requestType) {
      case "issued":
        return "green";
      case "denied":
        return "red";
      case "pending":
        return "grey";
      default:
        return "black"; // You can set a default color or handle other cases
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/user-requests/11");
        setRequests(res.data.userRequests);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      isbn: "",
    },

    onSubmit: (values) => {
      const v = {
        readerId: Number(currentUser.user_id),
        bookId: Number(values.isbn),
        requestType: "pending",
      };
      axios
        .post("/request", v)
        .then(function (response) {
          setMessage("Book Requested Successfully");
        })
        .catch(function (error) {
          setMessage("Some Error Occured");
        });
    },
  });

  return (
    <div id="main">
      <div class="add-book-form">
        <div className="request-book-left">
          {requests.map((request) => (
            <div className="request-block" key={request.req_ID}>
              <div>Book ID: {request.bookId}</div>
              <div style={{display:"flex"}}>
                Status: 
                <div
                  className="req-status"
                  style={{ color: getStatusColor(request.requestType) }}
                >
                  {request.requestType}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div class="add-book-right">
          <div class="container">
            <div class="text">Request Book</div>
            <form onSubmit={formik.handleSubmit}>
              <div class="form-row">
                <div class="input-data">
                  <input
                    id="isbn"
                    name="isbn"
                    onChange={formik.handleChange}
                    value={formik.values.isbn}
                    type="text"
                    required
                  />
                  <div class="underline"></div>
                  <label for="">ISBN</label>
                </div>
              </div>
              <div class="form-row"></div>

              <div class="form-row submit-btn">
                <div class="input-data" id="add-book-btn">
                  <div class="inner"></div>
                  <input type="submit" value="Request Book" />
                </div>
              </div>
              <p>{message}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestBook;

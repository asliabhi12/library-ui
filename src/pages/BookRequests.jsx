import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";

function BookRequests() {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/requests");
        
        setRequests(Array.isArray(res.data.request) ? res.data.request : []);
      } catch (err) {
        
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const approveRequest = async (reqId) => {
    try {
      const res = await axios.post("/approve-request", { "reqId": reqId })
      alert(res.data.message)
        console.log(res.data.request);
    } catch (err) {
      alert(err.message)
      console.log(err);
    }
  }


  return (
    <div id="main">
      <div class="manage-books">
        <h2 style={{ color: "white" }}>Book Requests</h2>
        <div class="table">
          <div class="table-header">
            <div class="header__item">User Id</div>
            <div class="header__item">Request ID</div>
            <div class="header__item">Username</div>
            <div class="header__item">Book Requested</div>
            <div class="header__item">Request Date</div>
            <div class="header__item">Approve/Deny</div>
          </div>
          <div class="table-content">
            {requests.map((request) => (
              <div class="table-row" key={request.reqId}>
                <div class="table-data">{request.readerId}</div>
                <div class="table-data">{request.reqId}</div>
                <div class="table-data">Tom</div>
                <div class="table-data">{request.bookId}</div>
                <div class="table-data">{request.requestDate || "nA"}</div>
                <div class="table-data">
                  <div class="manage-request-icons">
                    <div style={{"cursor":"pointer"}}>
                      <img onClick={() => approveRequest(request.reqId)} src="./images/right-check.png" alt="" srcset="" />
                    </div>
                    <div style={{"cursor":"pointer"}}>
                      <img src="./images/wrong-cross.png" alt="" srcset="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookRequests;

import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";

function BookRequests() {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/issues");
        setIssues(res.data.issued)
        console.log(issues)
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div id="main">
      <div class="manage-books">
        <h2 style={{ color: "white" }}>Issue Registry</h2>
        <div class="table">
          <div class="table-header">
            <div class="header__item">IssueId</div>
            <div class="header__item">ISBN</div>
            <div class="header__item">readerId</div>
            <div class="header__item">ApproverID</div>
            <div class="header__item">Issue Status</div>
            <div class="header__item">Issue Date</div>
            <div className="header__item">Expected Return Date</div>
            <div class="header__item">Return Date</div>
            <div class="header__item">return ApproverId</div>

          </div>
          <div class="table-content">
            {issues.map((issue) => (
              <div class="table-row" key={issue.issueId}>
                <div class="table-data">{issue.issueId}</div>
                <div class="table-data">{issue.isbn}</div>
                <div class="table-data">{issue.readerId}</div>
                <div class="table-data">{issue.issueApproverId}</div>
                <div class="table-data" >{issue.issueStatus}</div>
                <div class="table-data">{issue.issueDate || "nA"}</div>
                <div class="table-data">{issue.expectedReturnDate || "nA"}</div>
                <div class="table-data">{issue.returnDate || "nA"}</div>
                <div class="table-data">{issue.returnApproverId || "nA"}</div>


              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookRequests;

import React from "react";

function BookRequests() {
  return (
    <div id="main">
      <div class="manage-books">
        <h2 style={{"color":"white"}}>Issue Registry</h2>
        <div class="table">
          <div class="table-header">
            <div class="header__item">User Id</div>
            <div class="header__item">Request ID</div>
            <div class="header__item">Username</div>
            <div class="header__item">Book Requested</div>
            <div class="header__item">Request ID</div>
            <div class="header__item">Approve/Deny</div>
          </div>
          <div class="table-content">
            <div class="table-row">
              <div class="table-data">2</div>
              <div class="table-data">0</div>
              <div class="table-data">Tom</div>
              <div class="table-data">1</div>
              <div class="table-data">5</div>
              <div class="table-data">
                <div class="manage-request-icons">
                  <div>
                    <img src="./images/right-check.png" alt="" srcset="" />
                  </div>
                  <div>
                    <img src="./images/wrong-cross.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="table-row">
              <div class="table-data">1</div>
              <div class="table-data">1</div>
              <div class="table-data">Dick</div>
              <div class="table-data">2</div>
              <div class="table-data">3</div>
              <div class="table-data">
                <div class="manage-request-icons">
                  <div>
                    <img src="./images/right-check.png" alt="" srcset="" />
                  </div>
                  <div>
                    <img src="./images/wrong-cross.png" alt="" srcset="" />
                  </div>
                </div>
              </div>{" "}
            </div>
            <div class="table-row">
              <div class="table-data">0</div>
              <div class="table-data">2</div>
              <div class="table-data">Harry</div>
              <div class="table-data">2</div>
              <div class="table-data">2</div>
              <div class="table-data">
                <div class="manage-request-icons">
                  <div>
                    <img src="./images/right-check.png" alt="" srcset="" />
                  </div>
                  <div>
                    <img src="./images/wrong-cross.png" alt="" srcset="" />
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookRequests;

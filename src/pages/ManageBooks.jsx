import React from 'react'

function ManageBooks() {
  return (
    <div id="main">
            <span style={{fontSize:"30px",cursor:"pointer"}} id="ham-burger" onclick="openNav()">&#9776;</span>
            <div class="manage-books">
                <div class="manage-block">
                    <div class="manage-left">
                        <div class="manage-icons">
                            <div class="manage-icon">+</div>
                            <div class="manage-icon">-</div>
                        </div>
                        <div class="manage-book-title">
                            <p>The Great Gatspby </p>
                        </div>
                    </div>
                    <div class="manage-right">
                        Available : 67/100
                    </div>
                </div>
                <div class="manage-block"></div>
                <div class="manage-block"></div>
                <div class="manage-block"></div>
                <div class="manage-block"></div>
                <div class="manage-block"></div>
                <div class="manage-block"></div>  
        </div>
        <span>Lib Id: 4564786</span>
    </div>
  )
}

export default ManageBooks
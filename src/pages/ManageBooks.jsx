import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios'

function ManageBooks() {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const res = await axios.get('/book')
                setBooks(res.data)
               
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    }, [])

    console.log(books)
  return (
    <div id="main">
            <div class="manage-books">
            { 
            books.map((book)=>(
                <div class="manage-block" key={book.isbn}>
                <div class="manage-left">
                    <div class="manage-icons">
                        <div class="manage-icon"><img src="./images/pen.png" alt="" srcset="" /></div>
                        <div class="manage-icon"><img src="./images/trash.png" alt="" srcset="" /></div>
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
                
                {/* <div class="manage-block"></div>
                <div class="manage-block"></div>
                <div class="manage-block"></div>
                <div class="manage-block"></div>
                <div class="manage-block"></div>
                <div class="manage-block"></div>   */}
        </div>
        <span>Lib Id: 4564786</span>
    </div>
  )
}

export default ManageBooks
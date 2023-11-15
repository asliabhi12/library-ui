import { useEffect, useState } from "react";
import axios from 'axios'


function Home() {
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

    return (
        <div id="main">
            <div class="books">
                <div class="grid">
                    {books.map((book)=>(
                        <div class="cell" key={book.isbn}>
                        <div class="book-card">
                            <img
                                src={`./images/book-covers/${book.version}.png`}
                                alt=""
                            />
                            <div class="book-title">
                                <span>{book.title}</span>
                            </div>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
}

export default Home;

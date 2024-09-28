import React from "react";
import { useParams } from "react-router-dom";
import { bookList } from "../utils/books";
import { Link } from "react-router-dom";

const BookDetails = () => {
    
    const { id } = useParams();

    const book = bookList.find((books) => books.id.toString() === id)

    if (!book) {
        return <h2>Book Not found</h2>
    }
    
        return (
                <>
                <div className="bookdetails-container">
                    <Link to="/browsebook" className="backbutton">Back to BrowseBook</Link>
                    <div className="book-details">
                        <div className="book-img">
                        <img src={book.image} alt="" height={200}/>
                        </div>
                        <div className="book-info">
                        <h1>{book.title}</h1>
                        <h3>{book.author}</h3>
                        <h4>{book.rating}</h4>
                        <h5>{book.category}</h5>
                        <p>{book.description}</p>
                        </div>
                    </div>
                </div>
                </>
            )
        }
        
export default BookDetails;
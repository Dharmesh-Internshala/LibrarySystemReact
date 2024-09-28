import React from "react";
import { Link, useParams } from "react-router-dom";
import { bookList } from "../utils/books";

function Categoriesedbook() {
    const { category } = useParams();

    const filteredBooks = category
        ? bookList.filter((book) => book.category === category)
        : bookList; 

    return (
        <>
            <div className="categoriesbook-container">
            <Link to="/" className="backtoHome-btn">Back To Home</Link>
            <div>
                <h2 className="categories-name">{category ? `${category} Books` : "All Books"}</h2>
                <ul className="categories-data">
                    {/* Render books filtered by the selected category */}
                    {filteredBooks.map((book, id) => (
                        <Link to={`/bookdetails/${book.id}`} key={id}>
                        <div className="categoriesbook-card">
                            <li>{book.title}</li>
                            <img src={book.image} alt="" width={200} height={200} />                        </div>
                            </Link>
                    ))}
                </ul>
            </div>
            </div>
        </>
    );
}

export default Categoriesedbook;

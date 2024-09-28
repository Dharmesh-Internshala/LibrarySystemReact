import React from "react";
import { Link } from "react-router-dom";

function Categoriescard({ name, thumbnail }) {
    return (
        <>
            <div className="categories-card">
                <img
                    src={`https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/${thumbnail}.jpg`}
                    alt=""
                    width="150px"
                    height="180px"
                />
                <h2>{name}</h2>
                {/* Link to the Categoriesedbook page, passing the category name as a URL param */}
                <button className="view-details">
                    <Link to={`/categories/${name}`}>View Details</Link>
                </button>
            </div>
        </>
    );
}

export default Categoriescard;

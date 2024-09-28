import React from "react";
import { Link } from "react-router-dom";

function Allbooks({ id, title, image }) {
    return (
        <>
        <Link to={`/bookdetails/${id}`}>
            <div className="browsebook"> 
                <img src={image} alt={title} width="200px" height="200px" />
                <h3>{title}</h3>
            </div>
                </Link>
        </>
    );
}

export default Allbooks;

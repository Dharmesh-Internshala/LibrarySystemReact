import React from "react";
import { categoryList } from "../utils/categories";
import Categoriescard from "./Categoriescard";
// import { Link } from "react-router-dom";
import Homeimage from "../assets/Homeimage.jpg";

function Home() {
    return (
        <>
                <div className="library-image">
                   <img src={Homeimage} alt="" />
                </div>
                        <div>
                <h1 className="message">Explore Our Diffrent Catogoies Books</h1>
            </div>

            <div className="categories-container">

                {
                    categoryList.map(({ id, name, thumbnail }) => (
                        <Categoriescard key={id} name={name} thumbnail={thumbnail} />
                    ))
                }

            </div>
        </>
    )
}


export default Home;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { bookList } from "../utils/books";
import Allbooks from "./Allbooks";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

function BrowseBook() {
  const [searchItem, setSearchItem] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All"); 
  
  // Access the books array from the Redux state
  const submittedBooks = useSelector((state) => state.books.books);

  // Combine static books with submitted books
  const combinedBooks = [...bookList, ...submittedBooks];

  // Filter books based on the search term and selected category
  const filteredBooks = combinedBooks.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchItem.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
    <div className="browsebook-container">
      <Search setSearchitem={setSearchItem} />

      <select className="categories-select" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Coding">Coding</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-fiction">Non-fiction</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Biography">Biography</option>
        <option value="Mystery">Mystery</option>
        <option value="Fantasy">Fantasy</option>
        <option value="History">History</option>
      </select>

      <div className="browsebook-section">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(({ id, title, image }) => (
            <Allbooks key={id} id={id} title={title} image={image} />
          ))
        ) : (
          <p>No books available. Please add some books.</p>
        )}
      </div>
        </div>
    </>
  );
}

export default BrowseBook;

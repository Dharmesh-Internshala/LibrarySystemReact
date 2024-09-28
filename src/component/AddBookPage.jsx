import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import {useNavigate} from "react-router-dom"

const AddBookPage = () => {
  const [book, setBook] = useState({
    id: "",
    category: "Fiction",
    title: "",
    author: "",
    description: "",
    rating: "",
    image: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add form validation logic here if needed

    dispatch(addBook(book)); // Dispatch action to add book to the store
    navigate("/browsebook") // navigate to browsebook section

    setBook({
      id: "",
      category: "Fiction",
      title: "",
      author: "",
      description: "",
      rating: "",
      image: "",
    });
  };

  return (
      <>
      <form className="add-book-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={book.title}
          onChange={handleChange}
          required
          />
      </div>

      <div className="form-group">
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={book.author}
          onChange={handleChange}
          required
          />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={book.description}
          onChange={handleChange}
          required
          />
      </div>

      <div className="form-group">
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={book.rating}
          onChange={handleChange}
          min="1"
          max="5"
          required
          />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={book.image}
          onChange={handleChange}
          required
          className="image-input" 
          />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={book.category}
          onChange={handleChange}
          >
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
        </select>

      </div>

      <button type="submit" className="submit-btn">Add Book</button>

    </form>
          </>
  );
};

export default AddBookPage;

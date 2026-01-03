
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.books);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !category || !description || !rating) {
      alert("Please fill all fields");
      return;
    }
    const newBook = {
      id: books.length + 1,
      title,
      author,
      category,
      description,
      rating: parseInt(rating),
    };
    dispatch(addBook(newBook));
    navigate("/books");
  };

  return (
   <div className="flex justify-center items-center min-h-screen bg-gray-50">
  <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
    <h1 className="text-3xl font-bold mb-4 text-center">Add a New Book</h1>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Book
        </button>
     </form>
  </div>
</div>
  );
}

export default AddBook;

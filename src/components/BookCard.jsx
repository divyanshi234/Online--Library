
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition mb-4">
      <h2 className="text-xl font-bold">{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>Rating: {book.rating}</p>
      <Link to={`/books/${book.id}`} className="text-blue-500 underline mt-2 inline-block">
        View Details
      </Link>
    </div>
  );
}

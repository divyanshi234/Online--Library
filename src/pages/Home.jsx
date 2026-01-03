
import BookCard from "../components/BookCard";
import { useSelector } from "react-redux";

export default function Home() {
  const books = useSelector((state) => state.books.books);

  const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

  const popularBooks = books.slice(0, 2); // first 2 as popular

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Online Library!</h1>

      <h2 className="text-2xl font-semibold mb-2">Categories</h2>
      <div className="flex gap-4 mb-6">
        {categories.map((cat) => (
          <span key={cat} className="bg-gray-200 px-3 py-1 rounded">{cat}</span>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-2">Popular Books</h2>
      {popularBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

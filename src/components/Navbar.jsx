
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-around">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/browse" className="hover:underline">Browse Books</Link>
      <Link to="/add" className="hover:underline">Add Book</Link>
    </nav>
  );
}

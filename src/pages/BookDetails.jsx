
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.books.find((b) => b.id === parseInt(id))
  );

  if (!book) return <p>Book not found</p>;

  return (

    <div className="flex justify-center items-center min-h-screen">
  <div className="border border-black p-6 rounded">
    <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
    <p className="text-xl mb-2">Author: {book.author}</p>
    <p className="mb-2">Category: {book.category}</p>
    <p className="mb-2">{book.description}</p>
    <p className="mb-4">Rating: {book.rating}/5</p>
    <Link
      to="/books"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Back to Browse
    </Link>
  </div>
</div>

    // <div>
    //   <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
    //   <p className="text-xl mb-2">Author: {book.author}</p>
    //   <p className="mb-2">Category: {book.category}</p>
    //   <p className="mb-2">{book.description}</p>
    //   <p className="mb-4">Rating: {book.rating}/5</p>
    //   <Link
    //     to="/books"
    //     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    //   >
    //     Back to Browse
    //   </Link>
    // </div>
  );
}

export default BookDetails;

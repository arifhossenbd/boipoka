import { getStoredList } from "../../utilites/addToDB"
import ReadBook from "../ReadBook/ReadBook";

export default function ReadBooks({ books, sortOption }) {
  const bookId = getStoredList('read-list');
  const readBooks = books.filter(book => bookId.includes(book.bookId));

  // Function to sort books based on the selected sort option
  const sortBooks = (readBooks, option) => {
    switch (option) {
      case "bestRating":
        return readBooks.sort((a, b) => b.rating - a.rating);
      case "classic":
        return readBooks.filter(book => book.category === "Classic");
      case "fiction":
        return readBooks.filter(book => book.category === "Fiction");
      case "fantasy":
        return readBooks.filter(book => book.category === "Fantasy");
      case "mystery":
        return readBooks.filter(book => book.category === "Mystery");
      default:
        return readBooks;
    }
  };

  // Sorted books based on the selected sort option
  const sortedBooks = sortBooks(readBooks, sortOption);
  return (
    <div>
      <div className="space-y-2 md:space-y-4">
        {
          sortedBooks.map((book) => <ReadBook key={book.bookId} book={book} />)
        }
      </div>
    </div>
  )
}

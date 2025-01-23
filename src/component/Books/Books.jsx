import { useEffect, useState } from "react";
import Book from "../Book/Book";

export default function Books() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('/booksData.json')
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);
  return (
      <div className="space-y-6 md:space-y-8">
          <h1 className="text-center text-2xl md:text-4xl font-semibold md:font-bold">Books</h1>
          <div id="#books" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {
                  books?.map(book => <Book key={book.bookId} book={book} />)
              }
          </div>
      </div>
  )
}

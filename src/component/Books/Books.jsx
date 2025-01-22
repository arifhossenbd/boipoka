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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
              books?.map(book => <Book key={book.bookId} book={book} />)
          }
    </div>
  )
}

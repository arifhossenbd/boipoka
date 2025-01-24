import { useLoaderData } from "react-router";
import WishlistBook from "../WishlistBook/WishlistBook";
import { getStoredList } from "../../utilites/addToDB";

export default function WishlistBooks({sortOption}) {
  const books = useLoaderData();
  const bookId = getStoredList('wishlist');
  const wishlistBooks = books.filter(book => bookId.includes(book.bookId));
  // Function to sort books based on the selected sort option
  const sortBooks = (wishlistBooks, option) => {
    switch (option) {
      case "bestRating":
        return wishlistBooks.sort((a, b) => b.rating - a.rating);
      case "classic":
        return wishlistBooks.filter(book => book.category === "Classic");
      case "fiction":
        return wishlistBooks.filter(book => book.category === "Fiction");
      case "fantasy":
        return wishlistBooks.filter(book => book.category === "Fantasy");
      case "mystery":
        return wishlistBooks.filter(book => book.category === "Mystery");
      default:
        return wishlistBooks;
    }
  };

  // Sorted books based on the selected sort option
  const sortedBooks = sortBooks(wishlistBooks, sortOption);
  return (
    <div>
      <div className="space-y-2 md:space-y-4">
        {
          sortedBooks.map((book) => <WishlistBook key={book.bookId} book={book} />)
        }
      </div>
    </div>
  )
}

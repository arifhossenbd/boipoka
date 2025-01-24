import { Link } from "react-router";

export default function WishlistBook({book}) {
  const { bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

  return (
    <div>
      <div className="card flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-8 flex-grow border border-gray-200 p-4">
        <figure className="md:w-1/3 py-8 rounded-xl my-auto bg-gray-100">
          <img
            src={image}
            alt={bookName} className="h-44 rounded-lg object-contain" />
        </figure>
        <div className="md:w-3/3 mx-auto space-y-2">
          <h2 className="card-title font-bold">{bookName}</h2>
          <p><i className="fa-solid fa-circle-user pr-1"></i> <span className="font-semibold text-sm">{author}</span></p>
          <div className="space-y-2 md:space-y-3">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <div className="flex items-center gap-2">
                <p className="font-bold"><i className="fa-solid fa-hashtag pr-1"></i></p>
                {tags?.map((tag, idx) => (
                  <button key={idx} className="badge bg-green-50 text-green-500 p-4 border-none font-medium text-sm">
                    #{tag}
                  </button>
                ))}
              </div>
              <p><i className="fa-solid fa-calendar pr-1"></i> Year of Publishing:
                <span className="pl-2">{yearOfPublishing}</span></p>
            </div>
            <div className="border-t-2 border-gray-200"></div>
            <div className="flex items-center gap-2 md:gap-4">
              <p><i className="fa-solid fa-user-group pr-1"></i>Publisher: <span className="pl-1">{publisher}</span></p>
              <p><i className="fa-solid fa-book-open pr-1"></i>Pages:
                <span className="pl-1">{totalPages}</span></p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <div className="flex md:items-center gap-2 md:gap-4">
                <h1 className="badge bg-blue-100 text-blue-500 p-4 border-none font-medium text-sm"><i className="fa fa-list-alt pr-1" aria-hidden="true"></i>Category: <span className="pl-1">{category}</span></h1>
                <h1 className="badge text-orange-400 p-4 border-none font-medium text-sm bg-orange-100"><i className="fa-solid fa-star pr-1"></i> Rating: <span className="pl-1">{rating}</span></h1>
              </div>
              <Link to={`/book/details/${book.bookId}`} className="badge bg-green-400 hover:bg-green-500 text-white p-4 border-none font-medium transition-all ease-linear duration-200"> <i className="fa-solid fa-circle-info pr-1"></i>
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

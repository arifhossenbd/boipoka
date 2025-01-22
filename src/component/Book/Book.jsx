export default function Book({ book }) {
    // console.log(Object.keys(book).join(", "));
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
  return (
      <div>
          <div className="card border border-gray-200 p-4 space-y-2 md:space-y-4">
              <figure className="bg-gray-100 py-8 md:py-12 rounded-xl">
                  <img
                      src={image}
                      alt={bookName}
                      className="rounded-xl h-40 w-32 md:w-fit md:object-cover" />
              </figure>
              <div className=" space-y-2">
                  <div className="space-x-1 md:space-x-2">{tags?.map((tag, idx) => <button key={idx} className="badge bg-green-50 text-green-500 p-4 border-none font-medium">{tag}</button>)}</div>
                  <h2 className="card-title">{bookName}</h2>
                  <p className="">by: <span className="font-medium text-sm">{author}</span></p>
                  <div className="flex items-center justify-between">
                      <p>{category}</p>
                      <p>{rating}</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

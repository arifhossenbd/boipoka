import { Link } from "react-router";

export default function Book({ book }) {
    const { bookId, bookName, author, image, rating, category, tags } = book;

    const fullStars = Math.floor(rating);  // Full stars based on rating's integer part
    const hasHalfStar = rating % 1 >= 0.5; // Half star if the decimal part is 0.5 or greater
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

    return (
        <Link to={`/book/${bookId}`}>
            <div className="card border border-gray-200 p-4 flex flex-col h-full space-y-4 md:space-y-6">
                <div className="space-y-4 md:space-y-6 flex-grow"> {/* Added flex-grow to push content down */}
                    <figure className="bg-gray-100 py-8 md:py-12 rounded-xl">
                        <img
                            src={image}
                            alt={bookName}
                            className="rounded-xl h-40 w-32 md:w-fit md:object-cover" />
                    </figure>
                    <div className="space-y-2 md:space-y-3">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                            {tags?.map((tag, idx) => (
                                <button key={idx} className="badge bg-green-50 text-green-500 p-4 border-none font-medium">
                                    {tag}
                                </button>
                            ))}
                        </div>
                        <h2 className="card-title">{bookName}</h2>
                        <p>by: <span className="font-medium text-sm">{author}</span></p>
                    </div>
                </div>

                {/* Rating and Category Section */}
                <div className="flex flex-col justify-end gap-4 mt-auto"> {/* mt-auto ensures it goes to the bottom */}
                    <div className="border-t-2 border-gray-200 border-dashed"></div>
                    <div className="flex items-center justify-between">
                        <p>{category}</p>
                        <div className="flex items-center gap-1 md:gap-2">
                            <p>{rating}</p>
                            <div className="flex items-center">
                                {/* Full Stars */}
                                {[...Array(fullStars)].map((_, idx) => (
                                    <i key={idx} className="fa-solid text-green-500 fa-star" />
                                ))}

                                {/* Half Star */}
                                {hasHalfStar && (
                                    <i className="fa-solid text-green-500 fa-star-half-stroke" />
                                )}

                                {/* Empty Stars */}
                                {[...Array(emptyStars)].map((_, idx) => (
                                    <i key={idx} className="fa-regular text-green-500 fa-star" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

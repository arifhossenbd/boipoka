import { Outlet, useLoaderData } from "react-router";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";
import { useState } from "react";

export default function ListedBooks() {

    const books = useLoaderData();
    const [selectedTab, setSelectedTab] = useState("read"); // State to track active tab
    const [sortOption, setSortOption] = useState("short"); // State for sorting option
    return (
        <div className="space-y-4 md:space-y-8">
            {/* Header Section */}
            <div className="flex flex-col justify-center items-center space-y-4 md:space-y-6">
                <h1 className="text-center text-2xl md:text-4xl font-semibold md:font-bold bg-gray-100 py-4 md:py-8 rounded-lg w-full">
                    Listed Books
                </h1>
                <div className="bg-green-400 hover:bg-green-500 transition-all ease-linear duration-200 w-fit rounded-lg text-white p-1 md:p-2">
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="w-fit rounded-lg p-2 bg-base-100 outline-none focus:outline-none border-none bg-transparent font-bold"
                    >
                        <option value="short" disabled className="text-black">
                            Sort By
                        </option>
                        <option value="bestRating" className="text-black">
                            Best Rating
                        </option>
                        <option value="classic" className="text-black">
                            Classic
                        </option>
                        <option value="fiction" className="text-black">
                            Fiction
                        </option>
                        <option value="fantasy" className="text-black">
                            Fantasy
                        </option>
                        <option value="mystery" className="text-black">
                            Mystery
                        </option>
                    </select>
                </div>
            </div>

            {/* Tabs Section */}
            <div role="tablist" className="tabs tabs-lifted w-1/3">
                <button
                    role="tab"
                    aria-selected={selectedTab === "read"}
                    className={`tab font-bold ${selectedTab === "read" ? "tab-active" : ""}`}
                    onClick={() => setSelectedTab("read")}
                >
                    Read
                </button>
                <button
                    role="tab"
                    aria-selected={selectedTab === "wishlist"}
                    className={`tab font-bold ${selectedTab === "wishlist" ? "tab-active" : ""}`}
                    onClick={() => setSelectedTab("wishlist")}
                >
                    Wishlist
                </button>
            </div>

            {/* Tab Content */}
            <div className="border-t-base-300 bg-base-100 py-6">
                {selectedTab === "read" ? (
                    <ReadBooks books={books} sortOption={sortOption} />
                ) : (
                    <WishlistBooks books={books} sortOption={sortOption} />
                )}
            </div>

            {/* Nested Routes */}
            <Outlet />
        </div>
    );
}

const getStoredList = (dbName) => {
    const storedList = JSON.parse(localStorage.getItem(dbName))
    if (storedList) {
        return storedList;
    } else {
        return [];
    }
};
const addToStoredWishlist = (id) => {
    const storedWishlist = getStoredList("wishlist");
    if (!storedWishlist.includes(id)) {
        storedWishlist.push(id);
        localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
        console.log("Added to Wishlist");
    } else {
        console.log("Already exists in Wishlist");
    }
};
const addToStoredMarkedAsRead = (id, dbName) => {
    const storedMarkAsRead = getStoredList("read-list");
    if (!storedMarkAsRead.includes(id)) {
        storedMarkAsRead.push(id);
        localStorage.setItem("read-list", JSON.stringify(storedMarkAsRead));
        console.log("Added to read list");
    } else {
        console.log("Already exists in read list");
    }
};

export {addToStoredWishlist, addToStoredMarkedAsRead, getStoredList};
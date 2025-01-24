import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './component/Root/Root';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Home from './component/Home/Home';
import Books from './component/Books/Books';
import BookDetails from './component/BookDetails/BookDetails';
import ListedBooks from './component/ListedBooks/ListedBooks';
import ReadBooks from './component/ReadBooks/ReadBooks';
import WishlistBooks from './component/WishlistBooks/WishlistBooks';
import ReadBookDetails from './component/ReadBookDetails/ReadBookDetails';

const router = createBrowserRouter(
  [
    {
      path: '/',
      errorElement: <ErrorPage />,
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'books',
          element: <Books />,
        },
        {
          path: 'book/:bookId',
          loader: () => fetch(`/booksData.json`),
          element: <BookDetails />,
        },
        {
          path: 'listedBooks',
          loader: () => fetch(`/booksData.json`),
          element: <ListedBooks />,
          children: [
            {
              path: 'read',
              element: <ReadBooks />
            },
            {
              path: 'wishlist',
              element: <WishlistBooks />
            }
          ]
        },
        {
          path: 'book/details/:bookId',
          loader: () => fetch(`/booksData.json`),
          element: <ReadBookDetails />
        }
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </StrictMode>
);

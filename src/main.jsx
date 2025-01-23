import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './component/Root/Root';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Home from './component/Home/Home';
import Books from './component/Books/Books';
import BookDetails from './component/BookDetails/BookDetails';

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

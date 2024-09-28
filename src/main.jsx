import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './Redux/store.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BrowseBook from './component/BrowseBook.jsx';
import BookDetails from './component/BookDetails.jsx';
import AddBookPage from './component/AddBookPage.jsx';
import Header from './component/Header.jsx';
import Categoriesedbook from './component/Categoriesedbook.jsx';
import Error from './component/Error.jsx';
import Home from './component/Home.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <Error/>,
    children: [
      {
        path: "/",
        element : <Home/>
      },
      {
        path: "browsebook",
        element: <BrowseBook />,
      },
      {
        path: "bookdetails/:id", // Ensure correct dynamic route with :id
        element: <BookDetails />
      },
      {
        path:"/categories/:category",
        element : <Categoriesedbook/>
      },
      {
        path: "addbook",
        element : <AddBookPage/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
    <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);

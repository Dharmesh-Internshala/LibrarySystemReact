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




// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux'; // Import Provider from react-redux
// import App from './App.jsx';
// import './index.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import BrowseBook from './component/BrowseBook.jsx';
// import BookDetails from './component/BookDetails.jsx';
// import AddBookPage from './component/AddBookPage.jsx';
// import store from './redux/store'; // Import the Redux store

// // Define your routes
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "browsebook",
//         element: <BrowseBook />,
//       },
//       {
//         path: "bookdetails/:id",
//         element: <BookDetails />,
//       },
//       {
//         path: "addbook", // AddBookPage route
//         element: <AddBookPage />,
//       }
//     ],
//   },
// ]);

// // Render your application and wrap with Provider
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}> {/* Wrap your app with Provider */}
//       <RouterProvider router={appRouter} />
//     </Provider>
//   </StrictMode>
// );

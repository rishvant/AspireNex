import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About.jsx';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      { path: "/", element: <About /> },
      { path: "/about", element: <About /> }
    ]
  },
  // { path: "/contact", element: <Contact /> },
  // { path: "/about", element: <About /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)

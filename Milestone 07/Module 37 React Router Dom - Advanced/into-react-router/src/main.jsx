import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "about",
    element: <div>About World</div>,
  },
  {
    path: "blogs",
    element: <div>Bloging World</div>,
  },
  {
    path: "app",
    Component: App
  },
  {
    path: "app2",
    element: <App></App>,
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App></App> */}
  </StrictMode>,
)

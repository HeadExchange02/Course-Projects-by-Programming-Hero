import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './main.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Products from './Components/Products/Products.jsx';
import New from './Components/New/New.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users2/Users2.jsx'
import UserDetail from './Components/User/UserDetail.jsx'

const userPromise = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "Dashboard", Component: Dashboard },
      {
        path: "users",
        loader: () => fetch ("https://jsonplaceholder.typicode.com/users"),
        Component: Users
      },
      {
        path: "users2",
        element: <Suspense fallback={<span>Loading...</span>}>
          <Users2 userPromise = {userPromise}></Users2>
        </Suspense>
      },
      {
        path: "users/:usersId",
        loader: ({params}) => fetch (`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetail,
      },
      { path: "Products", Component: Products },
      { path: "New", Component: New }
    ]
  },
  {
    path: "/about",
    element: <div>About me</div>
  },
  {
    path: "/blog",
    element: <div>Blogs</div>
  },

  {
    path: "app",
    Component: App
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  HomePage from './Pages/HomePage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import SignupPage from './Pages/SignupPage.jsx'
import AllPostPage from './Pages/AllPostPage.jsx'
import AddPostPage from './Pages/AddPostPage.jsx'
import EditPostPage from './Pages/EditPostPage.jsx'
import PostPage from './Pages/PostPage.jsx'

import Protected from './components/AuthLayout.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: (
          <Protected authentication={false}>
            <LoginPage />
          </Protected>
        ),
      },
      {
        path: "/signup",
        element: (
          <Protected authentication={false}>
            <SignupPage />
          </Protected>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <Protected authentication>
            {" "}
            <AllPostPage />
          </Protected>
        ),
      },
      {
        path: "/add-post",
        element: (
          <Protected authentication>
            {" "}
            <AddPostPage />
          </Protected>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <Protected authentication>
            {" "}
            <EditPostPage />
          </Protected>
        ),
      },
      {
        path: "/post/:slug",
        element: <PostPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './components/ErrorPage.tsx';
import PostList from './components/PostList.tsx';
import NewPost from './components/NewPost.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PostList />,
      },
      {
        path:'/create-post',
        element:<NewPost/>
      }
    ],
  },
]);   

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import PostList from "../components/PostList";
import NewPost from "../components/NewPost";
import PostDetail from "../components/PostDetails"

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
        },
        {
          path: "/:postId",
          element: <PostDetail />,
        }
      ],
    },
  ]);   

  export default router


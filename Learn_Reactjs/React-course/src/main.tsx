import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import router from "./routes/router.tsx";
import PostProvider from "./hook/postContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PostProvider>
      <RouterProvider router={router} />
    </PostProvider>
  </React.StrictMode>
);

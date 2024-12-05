import { createBrowserRouter } from "react-router-dom";
import Index from "../Layout/Index";

import Home from "../Pages/Home";
import Compare from "../Pages/Compare";
import NewsArticle from "../Pages/NewsArticle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/compare",
        element: <Compare />,
      },
      {
        path: "/newsarticle",
        element: <NewsArticle />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Index from "../Layout/Index";

import CountryRank from "../Pages/CountryRank";
import Compare from "../Pages/Compare";
import NewsArticle from "../Pages/NewsArticle";
import Home from "../Pages/Home";

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
        path: "/countryrank",
        element: <CountryRank />,
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

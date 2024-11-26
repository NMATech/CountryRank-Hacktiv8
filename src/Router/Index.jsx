import { createBrowserRouter } from "react-router-dom";
import Index from "../Layout/Index";

import Home from "../Pages/Home";
import Compare from "../Pages/Compare";

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
    ],
  },
]);

export default router;

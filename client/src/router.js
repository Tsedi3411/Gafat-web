import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home";
import Partners from "./Components/Partners";
import News from "./Components/News";
import About from "./Components/About";
import Service from "./Components/Service";
// import path from "path";
import DetailOne from "./Components/DetailOne";
import DetailTwo from "./Components/DetailTwo";
import DetailThree from "./Components/DetailThree";
import Contact from "./Components/Contact";
import Vacancy from "./Components/Vacancy";
import Forign from "./Components/Forign";
// import path from "path";
import Experiance from "./Components/Experiance";
import Newsdetail from "./Components/Newsdetail";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: '/experiance',
        element: <Experiance />
      },

      {
        path: "/service",
        element: <Service />,
      },

      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: '/vacancy',
        element: <Vacancy />
      },

      {
        path: "/partner",
        element: <Partners />,
      },

      {
        path: '/news',
        element: <News />
      },

      {
        path: "/news/detail/:id",
        element: <Newsdetail />,
      },

      {
        path: 'forign',
        element: <Forign />
      },
    ],
  },
]);
export default router;
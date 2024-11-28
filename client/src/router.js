import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home";
import Partners from "./Components/Partners";
import News from "./Components/News";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Vacancy from "./Components/Vacancy";
import Forign from "./Components/Forign";

import Experiance from "./Components/Experiance";
import Newsdetail from "./Components/Newsdetail";
import NewsBlog from "./Components/NewsBlog";
import Blog from "./Components/BlogDetail";
import Vac from "./Components/Vac";



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
        path: '/vacancy/detail/:id',
        element: <Vacancy />
      },
      {
        path:'/Vacancy',
        element:<Vac />
      },
      {
        path: '/forign',
        element: <Forign />
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
         path:'/newsBlog',
         element:<NewsBlog />
      },
      {
        path: "/newsblog/detail:id",
        element: <Blog />
      },
      // {
      //   path:"detail/blog:id",
      //   element:<NewsBlog />
      // }
    ],
  },
]);
export default router;
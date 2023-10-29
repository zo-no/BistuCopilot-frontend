import Login from "@/pages/Login";
import Article from "@/pages/Acticle";

import Layout from "@/pages/Layout";
import Board from "@/pages/Board";
import About from "@/pages/About";
import NotFound from '@/pages/Notfound'

import { createBrowserRouter } from "react-router-dom";

//创建router实例对象，并配置路由
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,//默认二级路由
        element: <Board />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/article/:id/:name",
    element: <Article />,
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;

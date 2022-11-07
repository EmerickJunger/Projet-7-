import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./views/Layout"
import Home from "./views/Home"
import Place from "./views/Place"
import About from "./views/About"
import NotFound from "./views/NotFound"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/place/:id",
          element: <Place/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "*",
          element: <NotFound/>
        }
      ],
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./componants/Layout"
import Home from "./componants/Home";
import Place from "./componants/Place";
import NotFound from "./componants/NotFound";
import About from "./componants/About";

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
          path: "/place",
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
    <></>
  );
}

export default App;

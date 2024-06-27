import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Page1 from "./Pages/Page1"
import Page2 from "./Pages/Page2"
import Page3 from "./Pages/Page3"
import Navbar from "./Component/Navbar/Navbar"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar/> <Page1 /></>
    },
    {
      path: "/page2",
      element: <> <Navbar/> <Page2 /></>
    },
    {
      path: "/page3",
      element: <> <Navbar/> <Page3 /></>
    },
    {
      path: "*",
      element: <Page1 />
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
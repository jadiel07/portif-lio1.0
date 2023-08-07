import { createBrowserRouter } from "react-router-dom";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import Welcome from "./pages/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/about-me",
    element: <About />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

export default router;

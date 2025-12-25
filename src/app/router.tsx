import { createBrowserRouter } from "react-router-dom";
import App from "@/app/App";
import Home from "@/pages/Home";
import Rooms from "@/pages/Rooms";
import Contact from "@/pages/Contact";
import GalleryPage from "@/pages/GalleryPage";
import LocationPage from "@/pages/LocationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/rooms", element: <Rooms /> },
      { path: "/gallery", element: <GalleryPage /> },
      { path: "/location", element: <LocationPage /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;

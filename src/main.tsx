import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {  createBrowserRouter, RouterProvider  } from "react-router";
import App from "./App";
import Settings from "./pages/Settings.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/settings",
    Component: Settings,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);

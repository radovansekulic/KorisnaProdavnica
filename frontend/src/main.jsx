import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./ProductPage";
import ProductsAll from "./ProductsAll";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/product/:id",
    element: <ProductPage />
  },
  {
    path: "/collection",
    element: <ProductsAll />
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage.tsx";
import Login from "./components/Login.tsx";
import Blog from "./components/Blog.tsx";
import CreateArticle from "./components/CreateArticle.tsx";
import DashboardLayout from "./layout/DashboardLayout.tsx";
import ArticlesPage from "./components/ArticlesPage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFoundPage /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "articles", element: <ArticlesPage /> },
      { path: "articles/create", element: <CreateArticle /> },
      { path: "articles/:id/edit", element: <CreateArticle /> },
    ],
  },
  { path: "/blog", element: <Blog /> },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

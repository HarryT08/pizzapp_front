import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "@/presentation/pages";

export const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/login", element: <LoginPage /> },
]);

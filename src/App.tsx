import { RouterProvider } from "react-router-dom";
import { router } from "@/presentation/routes";

export const App = () => {
  return <RouterProvider router={router} />;
};

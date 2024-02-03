import { useRoutes } from "react-router-dom";
import { RemoteApp, RoutesLayout } from "../components";

export function AppRoutes() {
  return useRoutes([
    {
      path: "",
      element: <RoutesLayout />,
      children: [
        {
          index: true,
          element: <RemoteApp />,
        },
      ],
    },
  ]);
}

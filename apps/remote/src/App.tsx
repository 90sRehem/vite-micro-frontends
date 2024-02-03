import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRoutes } from "./routes/app-routes.tsx";

const routes = [
  {
    path: "",
    element: <AppRoutes />,
    errorElement: <div>theres an error on remote</div>,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

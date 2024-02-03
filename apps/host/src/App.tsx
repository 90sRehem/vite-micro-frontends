import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Shared from "shared/Utils";
import { remotesRoutes } from "./routes/remotes-routes.tsx";

function Layout() {
  console.log(Shared.helloWorld());
  return (
    <div>
      <div>host</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {remotesRoutes.map((route) => {
            if (route.path) {
              const path = route.path.replace("/*", "");
              return (
                <li key={route.path}>
                  <Link to={path}>{path}</Link>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: remotesRoutes,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import RemoteApp from "remote/App";
import { createRoutes } from "../utils";

export const remotesRoutes = createRoutes([
  {
    path: "remote/*",
    element: <RemoteApp />,
    errorElement: <div>theres an error on remote</div>,
  },
]);

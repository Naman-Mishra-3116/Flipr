import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AllSubscribers from "./Admin/AllSubscribers";
import AllContacts from "./Admin/AllContacts";
import AllProjects from "./Admin/AllProjects";
import CreateClient from "./Admin/CreateClient";
import CreateProject from "./Admin/CreateProject";
import AllClients from "./Admin/AllClients";
import RootElementForAdmin from "./Admin/RootElementForAdmin";
function App() {
  const router = createBrowserRouter([
    {
      path: "/admin",
      element: <RootElementForAdmin />,
      children: [
        {
          index: true,
          element: <AllProjects />,
        },
        {
          path: "allClients",
          element: <AllClients />,
        },
        {
          path: "subscribers",
          element: <AllSubscribers />,
        },
        {
          path: "createProject",
          element: <CreateProject />,
        },
        {
          path: "createClient",
          element: <CreateClient />,
        },
        {
          path: "allContacts",
          element: <AllContacts />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

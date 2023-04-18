import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InteriorDesignLists, {
  loader as listLoader,
} from "./pages/InteriorDesignLists";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import InteriorDesignDetail, {
  loader as detailLoader,
} from "./pages/InteriorDesignDetail";
import NewInteriorDesign from "./pages/NewInteriorDesign";
import NewInteriorItem from "./pages/NewInteriorItem";
import { action as manipulateDesignAction } from "./components/interiors/RegisterDesignForm";
import { action as addItemAction } from "./components/interiors/RegisterItemsForm";
import HomePage from "./pages/Home";
import EditInteriorDesign from "./pages/EditInteriorDesign";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "interiors",
        element: <InteriorDesignLists />,
        loader: listLoader,
      },
      {
        path: "interiors/new",
        element: <NewInteriorDesign />,
        action: manipulateDesignAction,
      },
      {
        path: "interiors/:designId",
        id: "design-detail",
        loader: detailLoader,
        children: [
          {
            index: true,
            element: <InteriorDesignDetail />,
          },
          {
            path: "new",
            element: <NewInteriorItem />,
            action: addItemAction,
          },
          {
            path: "edit",
            element: <EditInteriorDesign />,
            action: manipulateDesignAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

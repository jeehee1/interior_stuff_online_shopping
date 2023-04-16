import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InteriorDesignLists, {
  loader as listLoader,
} from "./pages/InteriorDesignLists";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import InteriorDesignDetail from "./pages/InteriorDesignDetail";
import NewInteriorDesign from "./pages/NewInteriorDesign";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <InteriorDesignLists /> },
      { path: "interiors", element: <InteriorDesignLists />, loader: listLoader },
      { path: "interiors/new", element: <NewInteriorDesign /> },
      { path: "interiors/:designId", element: <InteriorDesignDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

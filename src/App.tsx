import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InteriorDesignLists from "./pages/InteriorDesignLists";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import InteriorDesignDetailPage from "./pages/InteriorDesignDetail";
import NewInteriorDesign from "./components/interiors/NewInteriorDesign";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <InteriorDesignLists /> },
      { path: "/interiors", element: <InteriorDesignLists /> },
      { path: "/interiors/new", element: <NewInteriorDesign /> },
      { path: "/interiors/:interiorsId", element: <InteriorDesignDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

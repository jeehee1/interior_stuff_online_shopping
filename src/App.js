import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InteriorList from "./components/interiors/InteriorLists";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import InteriorsDetailPage from "./pages/InteriorsDetail";
import NewInteriors from "./components/interiors/NewInteriors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <InteriorList /> },
      { path: "/interiors", element: <InteriorList /> },
      { path: "/interiors/new", element: <NewInteriors /> },
      { path: "/interiors/:interiorsId", element: <InteriorsDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

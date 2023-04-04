import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InteriorList from "./components/interiors/InteriorLists";
import RootLayout from "./pages/Root";
import ShowInteriors from "./components/interiors/ShowInteriors";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <InteriorList /> },
      { path: "/interiors", element: <InteriorList /> },
      { path: "/interiors/details", element: <ShowInteriors /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

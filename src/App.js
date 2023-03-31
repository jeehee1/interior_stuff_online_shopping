import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InteriorList from "./components/interiors/InteriorLists";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [{ path: "/homedeco", element: <InteriorList /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

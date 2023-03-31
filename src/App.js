import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import InteriorList from "./components/interiors/InteriorLists";
import RootLayout from "./pages/RootLayout";
import ShowInteriors from "./components/interiors/ShowInteriors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [
      {index: true, element: <InteriorList/>},
      { path: "/interiors", element: <InteriorList /> },
      { path: "/interiorsdetail", element: <ShowInteriors /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

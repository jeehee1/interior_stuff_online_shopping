import { Suspense } from "react";
import { json, useRouteLoaderData, defer, Await } from "react-router-dom";
import ShowInteriorDesign from "../components/interiors/ShowInteriorDesign";

const InteriorDesignDetail = () => {
  const { design }: any = useRouteLoaderData("design-detail");

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={design}>
        {(loadedDesign) => <ShowInteriorDesign design={loadedDesign} />}
      </Await>
    </Suspense>
  );

};

const loadDesign = async (id: string) => {
  const response = await fetch(
    `https://interior-design-392ca-default-rtdb.firebaseio.com/design/${id}.json`
  );
  if (!response.ok) {
    throw json({ message: "Could not fetch design details." }, { status: 500 });
  } else {
    const data = await response.json();
    return data;
  }
};

export const loader = async ({ params }: { params: any }) => {
  const id = params.designId!;
  console.log(id);
  return defer({ design: loadDesign(id) });
};

export default InteriorDesignDetail;

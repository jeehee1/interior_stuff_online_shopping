import { Suspense } from "react";
import { json, useRouteLoaderData, defer, Await } from "react-router-dom";
import ShowInteriorDesign from "../components/interiors/ShowInteriorDesign";
import Spinner from "../UI/Spinner";

const InteriorDesignDetail = () => {
  const { design }:any = useRouteLoaderData("design-detail");

  return (
    <Suspense fallback={<Spinner/>}>
      <Await resolve={design}>
        {(loadedDesign) => <ShowInteriorDesign design={loadedDesign} />}
      </Await>
    </Suspense>
  );
};

const loadDesign = async (id: string) => {
  const response = await fetch(
    process.env.REACT_APP_FB_DATABASE_URL+`/design/${id}.json`
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
  return defer({ design: loadDesign(id) });
};

export default InteriorDesignDetail;

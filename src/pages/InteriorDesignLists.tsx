import { Suspense } from "react";
import ShowDesignLists from "../components/interiors/ShowDesignLists";
import {
  useLoaderData,
  json,
  defer,
  Await,
} from "react-router-dom";

type DesignsObject = {
  id: string;
  imgType: string;
  imgUrl: string;
  imgDesc: string;
  imgName: string;
}[];

const InteriorDesignLists = () => {
  const { designsData }: any = useLoaderData();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={designsData}>
        {(loadedDesigns) => <ShowDesignLists designs={loadedDesigns} />}
      </Await>
    </Suspense>
  );
};

export default InteriorDesignLists;

const loadDesigns = async () => {
  const response = await fetch(
    "https://interior-design-392ca-default-rtdb.firebaseio.com/design.json"
  );
  if (!response.ok) {
    throw json({ message: "Could not fetch designs." }, { status: 500 });
  } else {
    const data = await response.json();
    return data;
  }
};

export const loader = () => {
  return defer({
    designsData: loadDesigns(),
  });
};

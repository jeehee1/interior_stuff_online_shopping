import { Suspense } from "react";
import ShowDesignLists from "../components/interiors/ShowDesignLists";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import Spinner from "../UI/Spinner";

const InteriorDesignLists = () => {
  const { designsData }: any = useLoaderData();

  return (
    <Suspense fallback={<Spinner />}>
      <Await resolve={designsData}>
        {(loadedDesigns) => <ShowDesignLists designs={loadedDesigns} />}
      </Await>
    </Suspense>
  );
};

export default InteriorDesignLists;

const loadDesigns = async () => {
  const response = await fetch(
    process.env.REACT_APP_FB_DATABASE_URL + "/design.json"
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

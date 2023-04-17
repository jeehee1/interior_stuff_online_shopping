import ShowDesignLists from "../components/interiors/ShowDesignLists";
import { useLoaderData, json } from "react-router-dom";

type DesignsObject = {
  id: string;
  imgType: string;
  imgUrl: string;
  imgDesc: string;
  imgName: string;
}[];

const InteriorDesignLists = () => {
  const designsData: any = useLoaderData();
  let designList: DesignsObject = [];
  for (const key in designsData) {
    designList.push({
      id: key,
      imgType: designsData[key].imgType,
      imgUrl: designsData[key].imgUrl,
      imgDesc: designsData[key].imgDesc,
      imgName: designsData[key].imgName,
    });
  }

  return <ShowDesignLists designs={designList} />;
};

export const loader = async () => {
  const response = await fetch(
    "https://interior-design-392ca-default-rtdb.firebaseio.com/design.json"
  );
  if (!response.ok) {
    throw json({ message: "Could not fetch designs." }, { status: 500 });
  } else {
    return response;
  }
};

export default InteriorDesignLists;

import ShowDesignLists from "../components/interiors/ShowDesignLists";
import { useLoaderData } from "react-router-dom";

type DesignsObject = {
  id: string;
  imgId: number;
  imgUrl: string;
  imgDesc: string;
  imgName: string;
}[];

const InteriorDesignLists = () => {
  const designsData: any = useLoaderData();
  let designList:DesignsObject = [];
  for (const key in designsData) {
    designList.push({
      id: key,
      imgId: designsData[key].img.imgId,
      imgUrl: designsData[key].img.imgUrl,
      imgDesc: designsData[key].img.imgDesc,
      imgName: designsData[key].img.imgName,
    });
  }

  return <ShowDesignLists designs={designList} />;
};

export const loader = async () => {
  const response = await fetch(
    "https://interior-design-392ca-default-rtdb.firebaseio.com/design.json?limittToLast=10"
  );
  if (!response.ok) {
    throw new Error("Cannot fetch the data");
  } else {
    const data = await response.json();
    return data;
  }
};

export default InteriorDesignLists;

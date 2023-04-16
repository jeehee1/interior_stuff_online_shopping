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
  let designList: DesignsObject = [];
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
    "https://interior-design-392ca-default-rtdb.firebaseio.com/design.json"
  );
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch designs." }),
      { status: 500 }
    );
  } else {
    return response;
  }
};

export default InteriorDesignLists;

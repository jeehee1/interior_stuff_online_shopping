import { useLoaderData, useParams } from "react-router-dom";
import ShowInteriorDesign from "../components/interiors/ShowInteriorDesign";

type DesignItemInfo = {
  id: string;
  imgId: number;
  imgType: string;
  imgName: string;
  imgDesc: string;
  imgUrl: string;
  items: {
    itemId: number;
    itemName: string;
    itemPrice: number;
    itemDesc: string;
    itemAddress: string;
    itemCoorX: number;
    itemCoorY: number;
  }[];
};

const InteriorDesignDetail = () => {
  const designDetial: any = useLoaderData();
  const { interiorsId } = useParams();

  const designDetail: DesignItemInfo = {
    id: interiorsId!,
    imgId: designDetial.img.imgId,
    imgType: designDetial.img.imgType,
    imgName: designDetial.img.imgName,
    imgDesc: designDetial.img.imgDesc,
    imgUrl: designDetial.img.imgUrl,
    items: designDetial.items,
  };

  return <>{designDetail && <ShowInteriorDesign info={designDetail} />}</>;
};

export const loader = async () => {
  const response = await fetch(
    `https://interior-design-392ca-default-rtdb.firebaseio.com/design.json`
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

export default InteriorDesignDetail;

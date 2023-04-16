import { useLoaderData, useParams, json } from "react-router-dom";
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
  const { designId } = useParams();

  const designDetail: DesignItemInfo = {
    id: designId!,
    imgId: designDetial.img.imgId,
    imgType: designDetial.img.imgType,
    imgName: designDetial.img.imgName,
    imgDesc: designDetial.img.imgDesc,
    imgUrl: designDetial.img.imgUrl,
    items: designDetial.items,
  };

  return <>{designDetail && <ShowInteriorDesign info={designDetail} />}</>;
};

export const loader = async ({ params }: { params: any }) => {
  const id = params.designId!;
  const response = await fetch(
    `https://interior-design-392ca-default-rtdb.firebaseio.com/design/${id}.json`
  );
  if (!response.ok) {
    throw json({ message: "Could not fetch design details." }, { status: 500 });
  } else {
    return response;
  }
};

export default InteriorDesignDetail;

import {
  useParams,
  json,
  useRouteLoaderData,
} from "react-router-dom";
import ShowInteriorDesign from "../components/interiors/ShowInteriorDesign";

type Design = {
  id: string;
  imgType: string;
  imgName: string;
  imgDesc: string;
  imgUrl: string;
};

type DesignItem = {
  itemId: string;
  itemName: string;
  itemPrice: number;
  itemDesc: string;
  itemAddr: string;
  itemCoorX: number;
  itemCoorY: number;
}[];

const InteriorDesignDetail = () => {
  const { designId } = useParams();
  const design: any = useRouteLoaderData("design-detail");
  console.log(design);

  const designDetail: Design = {
    id: designId!,
    imgType: design.imgType,
    imgName: design.imgName,
    imgDesc: design.imgDesc,
    imgUrl: design.imgUrl,
  };

  const designItem: DesignItem = [];
  for (const key in design.items) {
    designItem.push({
      itemId: key,
      itemName: design.items[key].itemName,
      itemPrice: design.items[key].itemPrice,
      itemDesc: design.items[key].itemDesc,
      itemAddr: design.items[key].itemAddr,
      itemCoorX: design.items[key].itemCoorX,
      itemCoorY: design.items[key].itemCoorY,
    });
  }

  return (
    <>
      {designDetail && (
        <ShowInteriorDesign design={designDetail} items={designItem} />
      )}
    </>
  );
};

export const loader = async ({ params }: { params: any }) => {
  const id = params.designId!;
  console.log(id);
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

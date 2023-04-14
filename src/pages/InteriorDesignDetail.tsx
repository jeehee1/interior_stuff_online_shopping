import { useParams } from "react-router-dom";
import ShowInteriorDesign from "../components/interiors/ShowInteriorDesign";
import { useEffect, useState } from "react";

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
  const { designId } = useParams<{ designId: string }>();
  const id: string = designId ? designId : "notfound";
  if (id === "notfound") {
    throw new Error("interiors not fhound");
  }

  const [designDetail, setDesignDetail] = useState<DesignItemInfo>();

  const getDesignDetail = async () => {
    const response = await fetch(
      `https://interior-design-392ca-default-rtdb.firebaseio.com/design/${id}.json`
    );
    const data = await response.json();
    console.log(data);
    setDesignDetail({
      id: id,
      imgId: data.img.imgId,
      imgType: data.img.imgType,
      imgName: data.img.imgName,
      imgDesc: data.img.imgDesc,
      imgUrl: data.img.imgUrl,
      items: data.items,
    });
  };

  useEffect(() => {
    getDesignDetail();
  }, []);

  return (
    <>
      {designDetail && <ShowInteriorDesign info={designDetail} />}
    </>
  );
};

export default InteriorDesignDetail;

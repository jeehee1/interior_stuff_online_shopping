import { useParams, useRouteLoaderData } from "react-router-dom";
import RegisterItemForm from "../components/interiors/RegisterItemForm";

const EditDesignItem = () => {
  const design: any = useRouteLoaderData("design-detail");
  const { itemId } = useParams();
  const item = itemId ? design.items[itemId] : null;

  const imgInfo = { url: design.imgUrl, id: design.imgId };

  return <RegisterItemForm imgData={imgInfo} item={item} method="PATCH" />;
};

export default EditDesignItem;

import { useParams, useRouteLoaderData } from "react-router-dom";
import RegisterItemsForm from "../components/interiors/RegisterItemsForm";

const NewInteriorItem = () => {
  const { designId } = useParams();
  const designData: any = useRouteLoaderData('design-detail');
  const imgInfo = { url: designData.imgUrl!, id: designId! };

  return <RegisterItemsForm imgData={imgInfo} />;
};

export default NewInteriorItem;

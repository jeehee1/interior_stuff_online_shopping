import { useRouteLoaderData } from "react-router-dom";
import RegisterDesignForm from "../components/interiors/RegisterDesignForm";

const EditInteriorDesign = () => {
  const data: any = useRouteLoaderData("design-detail");
  const design = {
    imgName: data.imgName,
    imgUrl: data.imgUrl,
    imgDesc: data.imgDesc,
    imgType: data.imgType,
  };

  return <RegisterDesignForm method="patch" design={design} />;
};

export default EditInteriorDesign;

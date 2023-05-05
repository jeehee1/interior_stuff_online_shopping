import { useNavigate, useRouteLoaderData } from "react-router-dom";
import RegisterDesignForm from "../components/interiors/RegisterDesignForm";

const NewInteriorDesign = () => {

  return <RegisterDesignForm method="post" design={null} />;
};

export default NewInteriorDesign;

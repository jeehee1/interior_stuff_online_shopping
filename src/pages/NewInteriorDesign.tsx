import classes from "./spinner.module.css";
import RegisterDesignForm from "../components/interiors/RegisterDesignForm";

const NewInteriorDesign = () => {
  return <RegisterDesignForm method="post" design={null} />;
};

export default NewInteriorDesign;
